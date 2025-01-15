"use client";

import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { MailIcon } from "lucide-react";
import { Label } from "@/lib/ui/label";
import { LockIcon } from "lucide-react";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions/auth";
import { Fragment } from "react";
import { CircleAlertIcon } from "lucide-react";
import { clsx } from "clsx";
import { useAuthStore } from "@/lib/store/auth";
import { useEffect } from "react";
import { auth } from "@/auth";

export const SignInForm = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  useEffect(() => {
    if (!errorMessage) {
      const fetchUser = async () => {
        const session = await auth();
        if (session?.user) {
          setUser({
            id: session.user.id!,
            email: session.user.email!,
            name: session.user.name!,
            profile_image: session.user.image!,
            auth_provider: session.user.provider,
          });
        }
      };
      fetchUser();
    }
  }, [errorMessage, setUser]);

  const EMAIL_PLACEHOLDER = "이메일을 입력하세요";
  const PASSWORD_PLACEHOLDER = "비밀번호를 입력하세요";

  return (
    <Fragment>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <div className="flex items-center gap-2 pl-2 border-2 has-[:focus]:border-gray-500 rounded-lg">
              <MailIcon className="w-4 h-4 text-white fill-gray-500" />
              <Input
                className="border-none shadow-none focus:outline-none focus:border-transparent focus:ring-0"
                id="email"
                type="email"
                name="email"
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
                name="password"
                placeholder={PASSWORD_PLACEHOLDER}
                required
              />
            </div>
          </div>
          {/* TODO: 화면 흔들림 수정 필요 */}
          <div
            className={clsx(
              "flex items-center gap-2",
              errorMessage ? "opacity-100" : "opacity-0"
            )}
          >
            <CircleAlertIcon className="h-5 w-5 text-red-500" />
            <p className="text-red-500">{errorMessage}</p>
          </div>
          <Button className="w-full" disabled={isPending}>
            로그인
          </Button>
        </div>
      </form>
    </Fragment>
  );
};
