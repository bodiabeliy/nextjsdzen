import { ReactNode } from "react";
import { Button } from "../../components/Button/Button";
import {PlusIcon} from "../../components/Icons/plus"

interface TableHeaderProps {
    title:any;
}
const TableHeader = (props:TableHeaderProps) => {
    const {title}=props
    return ( 
        <>
            <div className="p-4 w-full min-w-[500px]">
                <h2 className="font-bold text-lg text-left">{title.title}</h2>
                <div className="flex items-end text-[#8bc34a]">
                <Button className="bg-[#8bc34a] rounded-full w-[25px] h-[25px] mt-4 mr-2">
                   <PlusIcon className={"scale-125"} fill={"white"} width={32} height={32} />
                </Button>
                Add Product
                </div>
                
            </div>  
        </>
    );
}
 
export default TableHeader;