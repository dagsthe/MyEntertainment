import {ModeToggle} from "./mode-toggle"
import Navigation from "./ui/Navigation"
import CompanyTitle from "./ui/CompanyTitle"
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function(){

    let location = useLocation()
    let navigate = useNavigate()

    const clickManager = (id:string, e:React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault(); // prevent navigation

            const section = document.getElementById(id)
            if (section)
                section.scrollIntoView({behavior:"smooth"})
            else
                window.scrollTo({ top: 0, behavior: "smooth" });

        } else {
            e.preventDefault(); // prevent Link's default navigation
            navigate("/");     // navigate manually
            
            setTimeout(() => {
                const section = document.getElementById(id)
                if (section)
                    section.scrollIntoView({behavior:"smooth"})
            }, 500)
        }
        // otherwise, let Link handle the navigation normally
    }

    return (
    <>

    <div className="z-10 h-10 bg-purple-800/40  flex flex-row justify-center md:justify-between px-5 top-0 fixed w-full backdrop-blur-md">
        <CompanyTitle>
            <div className="ml-5 md:hidden">
                <Navigation/>
            </div>
        </CompanyTitle>

        <div className="md:flex text-primary brightness-90 items-center gap-3 lg:gap-5 xl:gap-4 font-semibold text-lg hidden md:block">
            <Link to="/" onClick={(e)=>clickManager("",e)}> <p>Home</p> </Link>
            <Link to="/" onClick={(e)=>clickManager("aboutus",e)}> <p>About Us</p> </Link>
            <Link to="/team"> <p>Our Team</p> </Link>
            <Link to="/experiences"> <p>Experiences</p> </Link>
            <Link to="/contact"> <p>Contact us</p> </Link>
            <ModeToggle></ModeToggle>
        </div>


    </div>
    </>
    )
}