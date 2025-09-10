import Password from "@/components/Password";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function ChangePassword() {
    const form = useForm() 
     const onSubmit=async(data)=>{
        console.log(data)
            
        }
  return (
    <>
      <div className="container mx-auto w-[500px] grid gap-6">
     <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* email field */}
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
        {/* password field */}
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