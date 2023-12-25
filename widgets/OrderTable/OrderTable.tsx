"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import {
  OrderSelector,
  OrderUnitSelector,
  ProductsByOrderSelector,
  getOrderUnit,
  getProductsByOrderSuccess,
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

const OrderTable = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector(OrderSelector);
  const orderData = useSelector(OrderUnitSelector);
  const products = useSelector(ProductsByOrderSelector);

  const [isExpendMenu, setIsExpendMenu] = useState<boolean>(false);

  const [formatDateTime, setFormatDateTime] = useState("");
  const columns = [
    {
      dataField: "title",
      classes: `w-[300px] p-2 ${isExpendMenu == true ? "hidden " : "block"}`,
    },

    {
      dataField: "products",
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
    },
    {
      dataField: "products",
      classes: "w-[80px] p-2",
      formatter: (row: any) => (
        <>
          <div className="">
            <p className="text-xl">{row.length}</p>
            <span>Protucts</span>
          </div>
        </>
      ),
    },
    {
      dataField: "date",
      classes: "w-[180px] p-2",
      align: "center",
      formatter: (row: any) => (
        <>
          <div className="flex flex-col">
            <span className="text-xs">
              {DateTimeFormmater(row).monthByMonths}
            </span>
            <span>{DateTimeFormmater(row).transformedDate}</span>
          </div>
        </>
      ),
    },
    {
      dataField: "products",
      classes: `w-[200px] p-2 ${isExpendMenu == true ? "hidden" : "block"}`,
      align: "center",
      formatter: (row: any) =>
        row.map((x: any, indx: number) => {
          if (indx == 0) {
            return (
              <>
                {x.price.map((price: any) => {
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
              </>
            );
          }
        }),
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
      formatter: () => <Portal order={orderData} />,
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
          row: any,
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
    },
  ];

  const detailedColums = [
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
    },
    {
      dataField: "title",
      classes: "w-[250px] p-2",
      formatter: (row: string) => <>{row}</>,
    },
    {
      dataField: "isNew",
      classes: "w-[120px] p-2",
      formatter: (row: number) => (
        <>
          <span className={`${row == 0 ? "text-[#dc5439]" : "text-[#cddc39]"}`}>
            {row == 0 ? "Disable" : "Enable"}
          </span>
        </>
      ),
    },
    {
      dataField: "action",
      classes: "w-[80px] p-2 ",
      formatter: () => (
        <TrashIcon className={""} fill={"#90a4ae"} width={20} height={20} />
      ),
    },
  ];

  const selectRow = {
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

  const expendMenu = (rowData: any) => {
    dispatch(getProductsByOrderSuccess(rowData.products));
    dispatch(getOrderUnit(rowData));
    setIsExpendMenu((isExpendMenu) => !isExpendMenu);
  };

  const openRemoveModal = (indx: number) => {
    dispatch(getOrderUnit(orders[indx]));
  };
  return (
    <>
      <div className={`ml-40 mt-20 ${isExpendMenu && "flex"}`}>
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
    </>
  );
};

export default OrderTable;
