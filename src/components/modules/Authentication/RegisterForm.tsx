import * as z from "zod"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod"
import { Role } from "@/constants/role";
import { Vehicle } from "@/constants/vehicle";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Password from "@/components/Password";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8,"Password must be 8 character"),
  phone:z.string(),
  role: z.enum(Role, {
    message: "Role is required",
  }),
  licenseNumber: z.string().optional(),
  vehicleNumber: z.string().optional(),
  vehicle: z.enum(Vehicle,{
     message: "Vehicle is required",
  }).optional(),
})

export default function RegisterForm() {
  const [register]=useRegisterMutation()
  const navigate=useNavigate()
  
    const form=useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password:"",
      phone:"",
      role: "RIDER",
      licenseNumber: "",
      vehicleNumber:"",
      vehicle:undefined,
    },
  })

   const selectedRole = form.watch("role") 

    const handleRegisterSubmit=async(data:z.infer<typeof registerSchema>)=>{
        const userData={
          name:data.name,
          email:data.email,
          password:data.password,
          phone:data.phone,
          role:data.role,
          licenseNumber:data?.licenseNumber,
          vehicleNumber:data?.vehicleNumber,
          vehicle:data?.vehicle
        }
      try {
        const res=await register(userData).unwrap()
         toast.success("User created successfully")
        navigate('/login')
        form.reset()
      } catch (error) {
        console.log(error)
        // console.log(error?.data?.message)
        if(error.status === 400 && error?.data?.message==="User already exists"){
            toast.error("User already exists")
        }else{
          toast.error(error?.data?.errorSources[0]?.message)
        }
        
      }
    }

  return (
    <>
      <div className="container mx-auto grid gap-6">
     <Form {...form} >
      <form onSubmit={form.handleSubmit(handleRegisterSubmit)} className="space-y-6">
        {/* name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>    
            </FormItem>
          )}
        />
        {/* email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@email.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        {/* phone number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+880" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {/* Role */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                  <SelectItem value="DRIVER">DRIVER</SelectItem>
                  <SelectItem value="RIDER">RIDER</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* drivingLicence */}
        {
            selectedRole==="DRIVER" && (
                <div className="space-y-6">
                <FormField
          control={form.control}
          name="licenseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Driving licence</FormLabel>
              <FormControl>
                <Input placeholder="Driving licence" {...field} />
              </FormControl>    
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="vehicleNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle number</FormLabel>
              <FormControl>
                <Input placeholder="vehicle  number" {...field} />
              </FormControl>    
            </FormItem>
          )}
        />

           <FormField
          control={form.control}
          name="vehicle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a vehicle" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="BIKE">BIKE</SelectItem>
                  <SelectItem value="CAR">CAR</SelectItem>
                  <SelectItem value="SCOOTER">SCOOTER</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>
            )
        }
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  <Link to="/login">Already have an account?</Link>
      </div>
    </>
  );
}