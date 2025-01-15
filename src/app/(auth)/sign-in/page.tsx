import { SignInForm } from "@/lib/components/form/signIn";
import { Button } from "@/lib/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import { Separator } from "@/lib/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="min-w-[448px] bg-transparent border-none shadow-none">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="text-2xl">로그인</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          계정에 로그인하여 서비스를 이용하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center px-8 py-10 w-full rounded-lg bg-white">
        {/* login form */}
        <SignInForm />

        {/* social login */}
        <section className="flex flex-col gap-4 w-full pt-6">
          <div className="flex items-center justify-center gap-2 overflow-hidden">
            <Separator className="w-1/3" />
            <p className="grow text-center text-sm text-gray-500">
              소셜 로그인
            </p>
            <Separator className="w-1/3" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="w-full px-3 py-4">
              <Image
                src="/login/google.svg"
                alt="google login"
                width={17}
                height={18}
              />
            </Button>
            <Button variant="outline" className="w-full px-3 py-4">
              <Image
                src="/login/apple.svg"
                alt="apple login"
                width={17}
                height={18}
              />
            </Button>
            <Button variant="outline" className="w-full px-3 py-4">
              <Image
                src="/login/facebook.svg"
                alt="facebook login"
                width={17}
                height={18}
              />
            </Button>
          </div>
          <div className="flex justify-between mt-6 text-center text-sm">
            <Link href="/sign-up">회원가입</Link>
            <Link href="/forgot-password">비밀번호를 잊으셨나요?</Link>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
