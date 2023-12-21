import Table from 'react-bootstrap/Table';

import BootstrapTable from 'react-bootstrap-table-next';


interface TableProps {
  tableColumns:any[];
  tableData:any[]
}

const TableComponent = (props:TableProps) => {
    const {tableColumns, tableData} = props
    return (

        <BootstrapTable 
          keyField='id' 
          data={ tableData } 
          columns={ tableColumns }
          rowClasses={"w-[300px] p-2 rounded-xl border-2 border-gray-300 m-4"}
         />
      );
}
 
export default TableComponent;