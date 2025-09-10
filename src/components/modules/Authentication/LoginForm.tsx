import Password from "@/components/Password";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import type { ILogin } from "@/types";
import { useForm,   type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";


export default function LoginForm() {
    const form = useForm<ILogin>() 
    const navigate=useNavigate()
  const [login]=useLoginMutation()

    const onSubmit:SubmitHandler<ILogin>=async(data)=>{
   
        try {
          const res=await login(data).unwrap()
          
       if (res.success) {
        toast.success("Logged in successfully");
        navigate("/");
      }
        } catch (error) {
          toast.error("Something went wrong")
        }
    }
  return (
    <>
      <div className="container mx-auto grid gap-6">
     <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* email field */}
        <FormField
          control={form.control}
          name="email" 
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="John@email" {...field} />
              </FormControl>    
            </FormItem>
          )}
        />
        {/* password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
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
  <Link to="/register">Register now</Link>
      </div>
    </>
  );
}