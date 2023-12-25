"use client"
import BootstrapTable from 'react-bootstrap-table-next';

interface TableProps {
 
  tableColumns:any[];
  tableData:any[]
  selectRow?:any
  caption?:JSX.Element
  classes?:string
  filter?:any
}

const TableComponent = (props:TableProps) => {
    const {tableColumns, tableData, selectRow, caption, classes, filter} = props
    
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
          filter={filter}
         />
         
        </>
      );
}
 
export default TableComponent;