import Table from 'react-bootstrap/Table';

import BootstrapTable from 'react-bootstrap-table-next';
import { ReactNode } from 'react';


interface TableProps {
 
  tableColumns:any[];
  tableData:any[]
  selectRow?:any
  caption?:JSX.Element
  classes?:string
}

const TableComponent = (props:TableProps) => {
    const {tableColumns, tableData, selectRow, caption, classes} = props
    
    return (

        <>
        <BootstrapTable 
          keyField='id' 
          data={ tableData } 
          classes={classes}
          columns={ tableColumns }
          rowClasses={"p-2 rounded-xl border-2 border-gray-300 m-4"}
          selectRow={ selectRow }
          caption={caption}
         />
         
        </>
      );
}
 
export default TableComponent;