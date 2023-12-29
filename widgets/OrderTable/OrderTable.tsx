"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import {
  OrderSelector,
  OrderUnitSelector,
  ProductsByOrderSelector,
  getOrderUnit,
  getProductsByOrderSuccess,
  removeOrderSuccess,
} from "../../shared/providers/reducers/OrderSlice";
import { useSelector } from "react-redux";
import getOrders from "../../shared/services/Orders";
import { useAppDispatch } from "../../shared/hooks";

import OrderTableBody from "../../components/Table/Table";
import DetailedOrderTableBody from "../../components/Table/Table";
import Portal from "../../components/Portal/Portal";

import DetailInfoIcon from "../../public/detail.png";
import TrashIcon from "../../components/Icons/trash";
import { Button } from "../../components/Button/Button";
import { ArrowRightIcon } from "../../components/Icons/arrow-right";

import { DateTimeFormmater } from "../../shared/libs/DateTimeFormater";
import { sumCalculator } from "../../shared/libs/currenciesCalculator";
import TableHeader from "../TableHeader/TableHeader";
import { PlusIcon } from "../../components/Icons/plus";
import Order, { ColumnsProps, Product, ProductPrice } from "../../shared/providers/types";
import { SelectRowProps } from "react-bootstrap-table-next";
import { useTranslation } from "next-i18next";

const OrderTable = () => {
  const {t} = useTranslation("orders")

  const dispatch = useAppDispatch();
  const orders = useSelector(OrderSelector);
  const orderData = useSelector(OrderUnitSelector);
  const products = useSelector(ProductsByOrderSelector);
  
  const [isExpendMenu, setIsExpendMenu] = useState<boolean>(false);

  const [formatDateTime, setFormatDateTime] = useState<string>("");
  const columns:ColumnsProps[] = [
    {
      dataField: "title",
      classes: `w-[300px] p-2 ${isExpendMenu == true ? "hidden " : "block"}`,
      text:""
    },

    {
      dataField: "detail",
      classes: "w-[80px] p-2",
      formatter: () => (
        <>
          <Image
            className="p-1 border-2 rounded-full "
            src={DetailInfoIcon.src}
            alt={"detail"}
            width={40}
            height={40}
          />
        </>
      ),
      text:""
    },
    {
      // dataField represents both the column name and the property object in the unit (not avialable to change) -
      // is the cause of the error in the console log: (Encountered two children with the same key, `products`)
      dataField: "products",
      classes: "w-[80px] p-2",
      formatter: (row: string) => (
        <>
          <div className="">
            <p className="text-xl">{row.length}</p>
            <span>{t("orderByProducts")}</span>
          </div>
        </>
      ),
      text:""
    },
    {
      dataField: "date",
      classes: "w-[180px] p-2",
      align: "center",
      formatter: (row: string) => (
        <>
          <div className="flex flex-col">
            <span className="text-xs">
              {DateTimeFormmater(row).monthByMonths}
            </span>
            <span>{DateTimeFormmater(row).transformedDate}</span>
          </div>
        </>
      ),
      text:""
    },
    {
      // dataField represents both the column name and the property object in the unit (not avialable to change) -
      // is the cause of the error in the console log: (Encountered two children with the same key, `products`)
      dataField: "products", 
      classes: `w-[200px] p-2 ${isExpendMenu == true ? "hidden" : "block"}`,
      align: "center",
      formatter: (row: string |any) =>
        row.map((x: Product, indx: number) => {
          if (indx == 0) {
            return (
              <div key={indx}>
                {x.price.map((price: ProductPrice) => {
                  return (
                    <div className="" key={price.symbol}>
                      {price.symbol && (
                        <div className="">
                          <span>{`${sumCalculator(
                            row,
                            price.symbol
                          )} ${price.symbol.replaceAll("USD", "$")}`}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          }
        }),
        text:""
    },
    {
      dataField: "action",
      classes: "w-[80px] p-2 ",
      events: {
        onClick: (
          e: any,
          column: any,
          columnIndex: any,
          row: any,
          rowIndex: number
        ) => {
          openRemoveModal(rowIndex);
        },
      },
      formatter: () => <Portal data={orderData} actionHanler={removeOrderSuccess(orderData.id)} />,
      text:""
    },
    {
      dataField: "expendMore",
      classes: "w-[65px]",
      align: "right",
      events: {
        onClick: (
          e: any,
          column: any,
          columnIndex: any,
          row: Order,
          rowIndex: number
        ) => {          
          expendMenu(row);
        },
      },
      formatter: () => (
        <>
          {
            <Button
              className={
                "text-white bg-[#cfd8dc] hover:bg-[#bbc1c4] h-[70px] font-medium text-sm px-2 py-3 text-center inline-flex items-center"
              }
            >
              <ArrowRightIcon
                className={"scale-75"}
                fill={"#fff"}
                width={"24"}
                height={"24"}
              />
            </Button>
          }
        </>
      ),
      text:""
    },
  ];

  const detailedColums:ColumnsProps[] = [
    {
      dataField: "photo",
      classes: "w-[90px] p-2",
      formatter: (row: any) => (
        <>
          <Image
            className="p-1"
            src={row}
            alt={"detail"}
            width={300}
            height={300}
          />
        </>
      ),
      text:""
    },
    {
      dataField: "title",
      classes: "w-[250px] p-2",
      formatter: (row: string) => <>{row}</>,
      text:""
    },
    {
      dataField: "isNew",
      classes: "w-[120px] p-2",
      formatter: (row: string) => (
        <>
          <span className={`${Number(row) == 0 ? "text-[#dc5439]" : "text-[#cddc39]"}`}>
            {Number(row) == 0 ? `${t("isNotEnable")}` : `${t("isEnable")}`}
          </span>
        </>
      ),
      text:""
    },
    {
      dataField: "action",
      classes: "w-[80px] p-2 ",
      formatter: () => (
        <TrashIcon className={""} fill={"#90a4ae"} width={20} height={20} />
      ),
      text:""
    },
  ];

  const selectRow:SelectRowProps<any> = {
    mode: "radio",
    clickToSelect: true,
  };

  useEffect(() => {
    setFormatDateTime;
  }, [formatDateTime]);

  useEffect(() => {
    if (dispatch) {
      getOrders(dispatch);
    }
  }, []);

  const expendMenu = (rowData: Order) => {
    dispatch(getProductsByOrderSuccess(rowData.products));
    dispatch(getOrderUnit(rowData));
    setIsExpendMenu((isExpendMenu) => !isExpendMenu);
  };

  const openRemoveModal = (indx: number) => {
    dispatch(getOrderUnit(orders[indx]));
  };
  return (
    <>
      <div className={`ml-40 mt-20`}>
        <Button>
            <div className="flex items-center mb-10">
            <Button className="bg-[#8bc34a] rounded-full w-[25px] h-[25px] mr-2 p-4 border-4 border-[#87bd4a]">
                   <PlusIcon className={"scale-125 translate-y-[-10px] translate-x-[-12px]"} fill={"white"} width={32} height={32} />
            </Button>
            <h2 className="font-semibold text-2xl">{t("orders")}: / {orders.length}</h2>

            </div>
        </Button>

        <div className={`${isExpendMenu && "flex"}`}>
        <OrderTableBody tableColumns={columns} tableData={orders} />
        {isExpendMenu && (
          <div className="expendMenu">
            <DetailedOrderTableBody
              tableColumns={detailedColums}
              tableData={products}
              selectRow={selectRow}
              classes={"detailedOrderTable"}
              caption={<TableHeader title={orderData} />}
            />
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default OrderTable;
