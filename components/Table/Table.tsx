import BootstrapTable, { SelectRowProps } from 'react-bootstrap-table-next';
import Order, { ColumnsProps, Product, SelectProductProps } from '../../shared/providers/types';

interface TableProps {
 
  tableColumns:ColumnsProps[];
  tableData:Order[] |Product[]
  selectRow?:SelectRowProps<SelectProductProps> 
  caption?:JSX.Element
  classes?:string
  filter?:unknown
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