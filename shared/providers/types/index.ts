import { CSSProperties } from "react";

export default interface Order {
  id:number;
  title:string;
  date:string;
  description:string;
  products:Product[];
  totalSum:number
}

export interface Product {
  id:number;
  isAvialable:number;
  tiserialnumbertle:number;
  photo:string;
  title:string;
  type:string;
  specification:string;
  guarantee:DatePeriod;
  price:ProductPrice;
  date:string;
}

interface DatePeriod {
 start:string;
 end:string;
}

export interface ProductPrice {
  [x: string]: any; // for forEach
  value:number;
  symbol:string;
  isDefault:number
}
 


export interface ColumnsProps {
  dataField: string,
  text: string,
  classes: string,
  align?:string,
  filter?:Partial<{ id: string; placeholder: string; className: string; defaultValue: any; style: CSSProperties; delay: number; getFilter: (filter: (value: any) => void | any[]) => void; onFilter: (filterValue: any) => void | any[]; }>,
  formatter?: (row: string) => JSX.Element,
  events?:{
    onClick: (e: React.FormEvent<HTMLFormElement>, column: any, columnIndex: number, row: any, rowIndex: number) => void
  }
}
