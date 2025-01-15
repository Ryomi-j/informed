"use client";

import { signUp } from "@/lib/actions/auth";
import { State } from "@/lib/types/form";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import Link from "next/link";
import { useActionState } from "react";

export const SignUpForm = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(signUp, initialState);

  const EMAIL_PLACEHOLDER = "이메일 주소";
  const PASSWORD_PLACEHOLDER = "비밀번호";
  const PASSWORD_CHECK_PLACEHOLDER = "비밀번호 확인";

  return (
    <form className="w-full" action={formAction}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            name="email"
            className="focus:border-gray-500"
            id="email"
            type="email"
            placeholder={EMAIL_PLACEHOLDER}
            required
            aria-describedby="email-error"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            name="password"
            className="focus:border-gray-500"
            id="password"
            type="password"
            placeholder={PASSWORD_PLACEHOLDER}
            required
            aria-describedby="password-error"
          />
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password-check">비밀번호 확인</Label>
          <Input
            name="confirmPassword"
            className="focus:border-gray-500"
            id="password-check"
            type="password"
            placeholder={PASSWORD_CHECK_PLACEHOLDER}
            required
            aria-describedby="password-check-error"
          />
          <div id="password-check-error" aria-live="polite" aria-atomic="true">
            {state.errors?.confirmPassword &&
              state.errors.confirmPassword.map((error: string) => (
                <p className="text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
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
