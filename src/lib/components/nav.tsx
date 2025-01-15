import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/avatar";
import { Button } from "@/lib/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Searchbar } from "./searchbar";
import Link from "next/link";
import { DROPDOWN_ROUTES, ROUTES } from "../constants/routes";
import { signOut } from "@/auth";

function Nav() {
  const sign_out = async () => {
    "use server";
    await signOut();
  };
  const SEARCHBAR_PLACEHOLDER = "검색어를 입력해주세요.";

  return (
    <div className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center p-4 gap-2">
        {/* Logo */}
        <Link href={ROUTES.HOME}>
          <h1 className="text-2xl font-bold">Informed</h1>
        </Link>

        {/* Searchbar */}
        <Searchbar
          placeholder={SEARCHBAR_PLACEHOLDER}
          iconPosition="left"
          className="w-2/3"
        />

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
              <DropdownMenuItem key={key}>
                <Link href={value} className="font-medium">
                  {key}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form action={sign_out}>
                <Button>Logout</Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Nav;
