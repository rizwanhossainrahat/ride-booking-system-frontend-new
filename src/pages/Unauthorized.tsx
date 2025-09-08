import { Link } from "react-router";
import unauthorized from "../assets/images/unauthorized.png"
import { Button } from "@/components/ui/button";

export default function Unauthorized() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
       <img className="max-w-full max-h-screen object-contain" src={unauthorized} alt="" />
     
      </div>
    <div className="container mx-auto flex items-center justify-center mb-15">
       <Button>
      <Link to="/">Go to Home</Link>
     </Button>
    </div>
         
    
    </>
  );
}