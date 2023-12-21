"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import TableComponent from "../../components/Table/Table";
import { OrderSelector } from "../../shared/providers/reducers/OrderSlice";
import { useSelector } from "react-redux";
import getOrders from "../../shared/services/Orders";
import { useAppDispatch } from "../../shared/hooks";

import DetailInfoIcon from "../../public/detail.png";

import TrashIcon from "../../public/trash.png";
import { DateTimeFormmater } from "../../shared/libs/DateTimeFormater";
import { sumCalculator } from "../../shared/libs/currenciesCalculator";

const columns = [
  {
    dataField: "title",
    classes: "w-[300px] p-2",
  },

  {
    dataField: "products",
    classes: "w-[80px] p-2",
    formatter: () => (
      <>
        <Image
          className="p-1 border-2	rounded-full "
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
    classes: "w-[200px] p-2",
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
                        <span>{`${sumCalculator(row, price.symbol) } ${price.symbol.replaceAll("USD", "$")}` }</span>
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
    formatter: () => (
      <Image src={TrashIcon.src} alt={"detail"} width={30} height={30} />
    ),
  },
];

const OrderScreen = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector(OrderSelector);

  console.log("orders", orders);

  const [formatDateTime, setFormatDateTime] = useState("");

  useEffect(() => {
    setFormatDateTime;
  }, [formatDateTime]);

  useEffect(() => {
    if (dispatch) {
      getOrders(dispatch);
    }
  }, []);

  return (
    <div className="ml-40 mt-20">
      <TableComponent tableColumns={columns} tableData={orders} />
    </div>
  );
};

export default OrderScreen;
