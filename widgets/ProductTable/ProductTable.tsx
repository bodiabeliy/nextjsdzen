"use client";
import { useDispatch, useSelector } from "react-redux";
import OrderTableBody from "../../components/Table/Table";
import { ProductSelector } from "../../shared/providers/reducers/ProductSlice";
import { useEffect } from "react";
import getProducts from "../../shared/services/Products";
import { DateTimeFormmater } from "../../shared/libs/DateTimeFormater";

import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';


const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector(ProductSelector);
  const selectOptions = {
    "NoteBook": 'NoteBook',
    "Monitors": 'Monitors'
  };
  const columns: any[] = [
    {
      dataField: "title",
      classes: "w-[200px] p-2",
      formatter: (row: string) => <>{row}</>,
    },
    {
      dataField: "type",
      classes: "w-[80px] p-2",
      formatter: (row: string) => <>{row}</>,
      filter: selectFilter({
        options: selectOptions
      })
    },
    {
      dataField: "guarantee",
      classes: "w-[190px] p-2",
      formatter: (row: any) => (
        <>
          <div className="">
            <p className="text-center">
              Start: <br />
              <span className="font-bold">
                {DateTimeFormmater(row.start).monthByMonths}
              </span>
            </p>
            <p className="text-center">
              End: <br />
              <span className="font-bold">
                {DateTimeFormmater(row.start).transformedDate}
              </span>
            </p>
          </div>
        </>
      ),
    },
    {
      dataField: "price",
      classes: "w-[120px] p-2",
      formatter: (row: any) => (
        <>
          {row.map((rowData: any, indx: number) => {
              return (
                <>
                  <div className=""  key={rowData.symbol}>
                    <span>{ `${rowData.value}  ${rowData.symbol.replaceAll("USD", "$")}`}</span>
                  </div>
                </>
              );
            
          })}
        </>
      ),
    },
    {
      dataField: "order",
      classes: "w-[90px] p-2",
      formatter: (row: string) => <>{row}</>,
    },
  ];
  console.log(products);

  useEffect(() => {
    if (dispatch) {
      getProducts(dispatch);
    }
  }, []);
  return (
    <>
      <div className={`ml-40 mt-20 $`}>
        <OrderTableBody tableColumns={columns} tableData={products} filter={filterFactory()} />
      </div>
    </>
  );
};

export default ProductTable;
