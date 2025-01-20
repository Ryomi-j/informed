import FormNotification from "@/lib/components/form/notification";

export default function NotificationPage() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 pt-5">
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-gray-100/50 flex items-center justify-center">
        <h1 className="text-2xl font-bold">서비스 준비중입니다.</h1>
      </div>
      <div className="pb-4">
        <h1 className="text-2xl font-bold">Notification Management</h1>
        <p className="text-gray-500">
          알림을 설정하여 원하는 정보를 놓치지 않도록 하세요.
        </p>
      </div>
      <FormNotification />
    </div>
  );
}
