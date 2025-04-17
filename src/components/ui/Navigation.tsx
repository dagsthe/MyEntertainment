"use client"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import {Link, useLocation} from "react-router-dom"

export default function DropdownMenuCheckboxes() {
  const location:string = useLocation().pathname

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="fa-solid fa-bars "></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />

        <Link to={"/"}>
          <DropdownMenuCheckboxItem
            checked={location == "/"}
          >
            Home
          </DropdownMenuCheckboxItem>
        </Link>

        <Link to={"/experiences"}>
          <DropdownMenuCheckboxItem
            checked={location == "/experiences"}
          >
            Experiences
          </DropdownMenuCheckboxItem>
        </Link>

        <Link to={"/team"}>
          <DropdownMenuCheckboxItem
            checked={location == "/team"}
          >
            Our Team
          </DropdownMenuCheckboxItem>
        </Link>

        <Link to={"/contact"}>
          <DropdownMenuCheckboxItem
            checked={location == "/contact"}
          >
            Contact us
          </DropdownMenuCheckboxItem>
        </Link>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
