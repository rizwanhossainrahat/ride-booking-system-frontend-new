import Password from "@/components/Password";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { authApi, useChangepassMutation, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export default function ChangePassword() {
   const [logout] = useLogoutMutation();
   const [ChangePassword]=useChangepassMutation()
   const form = useForm() 
   const dispatch = useAppDispatch();
     const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
        try {
          const res=await ChangePassword(data).unwrap()
          
          if(res.success){
            toast.success("Password change successfully")
          }
          await logout(undefined)
           dispatch(authApi.util.resetApiState())
        } catch (error) {
          console.log(error)
        }
            
        }
  return (
    <>
      <div className="container mx-auto w-[500px] grid gap-6">
     <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Old password field */}
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password</FormLabel>
              <FormControl>
                {/* <Input placeholder="*******" {...field} /> */}
                <Password {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        {/* New password field */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                {/* <Input placeholder="*******" {...field} /> */}
                <Password {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
    </>
  );
}