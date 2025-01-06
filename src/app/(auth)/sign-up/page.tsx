import { SignUpForm } from "@/lib/components/form/signUp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";

export default function SignUp() {
  return (
    <Card className="min-w-[448px] bg-transparent border-none shadow-none">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="text-2xl">회원가입</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          회원가입을 통해 Informed에 가입하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center px-8 py-10 w-full rounded-lg bg-white">
        {/* sign up form */}
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
