import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { MailIcon } from "lucide-react";
import { Label } from "@/lib/ui/label";
import { LockIcon } from "lucide-react";

export const SignInForm = () => {
  const EMAIL_PLACEHOLDER = "이메일을 입력하세요";
  const PASSWORD_PLACEHOLDER = "비밀번호를 입력하세요";

  return (
    <form className="w-full">
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">이메일</Label>
          <div className="flex items-center gap-2 pl-2 border-2 has-[:focus]:border-gray-500 rounded-lg">
            <MailIcon className="w-4 h-4 text-white fill-gray-500" />
            <Input
              className="border-none shadow-none focus:outline-none focus:border-transparent focus:ring-0"
              id="email"
              type="email"
              placeholder={EMAIL_PLACEHOLDER}
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">비밀번호</Label>
          </div>
          <div className="flex items-center gap-2 pl-2 border-2 has-[:focus]:border-gray-500 rounded-lg">
            <LockIcon className="w-4 h-4 fill-gray-500 text-white" />
            <Input
              className="border-none shadow-none focus:outline-none focus:border-transparent focus:ring-0"
              id="password"
              type="password"
              placeholder={PASSWORD_PLACEHOLDER}
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </div>
    </form>
  );
};
