import AdminTable from "@/components/AdminTable";
import { useDeleteDriversMutation, useDriversQuery } from "@/redux/features/admin/admin.api";


export default function DriverDetails() {
  const {data}=useDriversQuery(undefined)
  const [deleteDriver]=useDeleteDriversMutation()
  return (
    <>
      <div >
       <h1 className="text-center text-red-500 font-bold text-2xl">Driver Details</h1>
        <AdminTable data={data?.data?.allDriver} deleteData={deleteDriver} />
      </div>
    </>
  );
}