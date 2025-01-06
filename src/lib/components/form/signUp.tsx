import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import Link from "next/link";

export const SignUpForm = () => {
  const EMAIL_PLACEHOLDER = "이메일 주소";
  const PASSWORD_PLACEHOLDER = "비밀번호";
  const PASSWORD_CHECK_PLACEHOLDER = "비밀번호 확인";

  return (
    <form className="w-full">
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            className="focus:border-gray-500"
            id="email"
            type="email"
            placeholder={EMAIL_PLACEHOLDER}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            className="focus:border-gray-500"
            id="password"
            type="password"
            placeholder={PASSWORD_PLACEHOLDER}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password-check">비밀번호 확인</Label>
          <Input
            className="focus:border-gray-500"
            id="password-check"
            type="password"
            placeholder={PASSWORD_CHECK_PLACEHOLDER}
            required
          />
        </div>
        {/* 약관 동의 */}
        {/* <div className="flex items-center gap-2">
          <Checkbox />
          <p>약관에 동의합니다</p>
        </div> */}
        <Button type="submit" className="w-full">
          회원가입
        </Button>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">이미 계정이 있으신가요?</p>
          <Link href="/sign-in">로그인</Link>
        </div>
      </div>
    </form>
  );
};
