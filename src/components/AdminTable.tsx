import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"; 

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "RIDER" | "DRIVER" | "ADMIN"; // depends on your system
  isActive: "ACTIVE" | "INACTIVE";
  licenseNumber: string;
  vehicleNumber: string;
  driverStatus: "ACTIVE" | "INACTIVE" | "PENDING";
  createdAt: string;  // or Date if you parse it
  updatedAt: string;  // or Date if you parse it
}

export interface AdminTableProps {
  data: IUser[] | undefined;
  deleteData: (id: string) =>void; 
}

export default function AdminTable({data,deleteData}:AdminTableProps) {

const handleDelete=async(id:string)=>{
  try {
   const res= await deleteData(id).unwrap()
    if(res.success){
      toast.success("Deleted successfully")
    }
  } catch (error) {
    console.log(error)
   toast.error("Something went wrong")
  }
}
  return (
    <div>
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>ROLE</TableHead>
          
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {data?.map((item) => (
            <TableRow
              key={item?._id}
              className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent"
            >
              <TableCell className="py-2.5 font-medium">{item?.name}</TableCell>
              <TableCell className="py-2.5">{item?.email}</TableCell>
              <TableCell className="py-2.5">{item?.role}</TableCell>
             
              <TableCell className="py-2.5 text-right">
             <Button onClick={()=>handleDelete(item?._id)}> <Trash2></Trash2></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={4}>Total: {data?.length}</TableCell>
            
          </TableRow>
        </TableFooter>
      </Table>
      
    </div>
  )
}
