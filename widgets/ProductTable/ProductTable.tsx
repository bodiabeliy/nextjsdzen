"use client";
import { useDispatch, useSelector } from "react-redux";
import OrderTableBody from "../../components/Table/Table";
import { FilteredProductsLengthSelector, ProductSelector, setFilteredProductsLength } from "../../shared/providers/reducers/ProductSlice";
import { useCallback, useEffect, useState } from "react";
import getProducts from "../../shared/services/Products";
import { DateTimeFormmater } from "../../shared/libs/DateTimeFormater";

import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { Button } from "../../components/Button/Button";
import { PlusIcon } from "../../components/Icons/plus";


const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector(ProductSelector);
  const filteredProductsCounter = useSelector(FilteredProductsLengthSelector)
  console.log("filteredProductsCounter", filteredProductsCounter);
  
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
        options: selectOptions,
        onFilter: filterVal => console.log(`Filter Value: ${filterVal}`)
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

  const afterFilter=(newResult:any[])=> {    
    dispatch(setFilteredProductsLength(newResult.length))
  }

  
  return (
    <>
      <div className={`ml-40 mt-20 $`}>
      <Button>
            <div className="flex items-center mb-10">
            <Button className="bg-[#8bc34a] rounded-full w-[25px] h-[25px] mr-2 p-4 border-4 border-[#87bd4a]">
                   <PlusIcon className={"scale-125 translate-y-[-10px] translate-x-[-12px]"} fill={"white"} width={32} height={32} />
            </Button>
            <h2 className="font-semibold text-2xl">Products: / {filteredProductsCounter > 0? filteredProductsCounter:products.length}</h2>
            </div>
        </Button>
        <OrderTableBody tableColumns={columns} tableData={products} filter={filterFactory({afterFilter})} />
      </div>
    </>
  );
};

export default ProductTable;
