import CompanyTitle from "./ui/CompanyTitle"
import { Link } from "react-router-dom";

export default function(){
    return (
    <>
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-[50%] w-full">
        <CompanyTitle className="text-primary brightness-90"/>
        <div className="flex text-primary brightness-90 items-center gap-7">
            <Link to={"/MyEntertainment"}>
                <p>Home</p>
            </Link>
            
            <Link to={"/contact"}>
                <p>Contact</p>
            </Link>
        </div>
    </div>
    <hr className="dark:border-white/20 border-black w-[80%] mt-5  mx-auto"></hr>
    <p className="text-primary brightness-50 text-center my-6">© 2025 MyEntertainment Studios. All rights reserved.</p>
    </>
    )
}