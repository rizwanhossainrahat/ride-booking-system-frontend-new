import AdminTable, { type AdminTableProps }  from "@/components/AdminTable";
import { useDeleteRidersMutation, useRidersQuery } from "@/redux/features/admin/admin.api";


export default function RiderDetails() {
  const {data}=useRidersQuery(undefined) as { data?: AdminTableProps }
  const [deleteRider]=useDeleteRidersMutation()
  return (
    <>
     <h1 className="text-center text-red-500 font-bold text-2xl">Rider Details</h1>
     <AdminTable data={data?.data?.allRider} deleteData={deleteRider} />

    </>
  );
}