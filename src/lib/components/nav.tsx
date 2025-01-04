import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/avatar";
import { ChevronDownIcon } from "lucide-react";
import { Searchbar } from "./searchbar";
import Link from "next/link";
import { DROPDOWN_ROUTES, ROUTES } from "../constants/routes";

function Nav() {
  return (
    <div className="w-full flex justify-between items-center p-4 gap-2">
      {/* Logo */}
      <Link href={ROUTES.HOME}>
        <h1 className="text-2xl font-bold">Informed</h1>
      </Link>

      {/* Searchbar */}
      <Searchbar placeholder="Search" iconPosition="left" className="w-2/3" />

      {/* User Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger className="group flex items-center gap-2 focus:outline-none">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            {/* TODO: 사용자 이미지 없을 때 대체 텍스트 수정 */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">Angela</p>
          <ChevronDownIcon className="w-4 h-4 text-gray-500 group-data-[state=open]:rotate-180 transition-transform duration-200" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.entries(DROPDOWN_ROUTES).map(([key, value]) => (
            <DropdownMenuItem>
              <Link href={value} className="font-medium">
                {key}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={ROUTES.HOME}>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Nav;
