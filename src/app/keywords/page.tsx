import { Button } from "@/lib/ui/button";
import { DropdownMenuSeparator } from "@/lib/ui/dropdown-menu";
import { Input } from "@/lib/ui/input";
import { Switch } from "@/lib/ui/switch";
import { BellIcon, BellOffIcon, PlusIcon, Trash2Icon } from "lucide-react";

export default function KeywordPage() {
  const INPUT_PLACEHOLDER = "Enter keyword (max 20 characters)";
  const dummyKeywords = {
    인공지능: true,
    빅데이터: false,
    메타버스: true,
  };
  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-xl mx-auto px-4 pt-5">
      {/* Title */}
      <div className="pb-4">
        <h1 className="text-2xl font-bold">Keyword Management</h1>
        <p className="text-gray-500">
          Add your keywords of interest and set up notifications
        </p>
      </div>

      {/* Add Keyword */}
      <form
        action=""
        className="flex items-center gap-2 p-6 bg-white rounded-lg shadow-md"
      >
        <Input placeholder={INPUT_PLACEHOLDER} className="rounded-none" />
        <Button type="submit">
          <PlusIcon className="w-4 h-4" />
          <span>Add</span>
        </Button>
      </form>

      {/* Registered Keywords */}
      <form
        action=""
        className="flex flex-col items-center gap-2 p-4 w-full bg-white rounded-lg shadow-md"
      >
        {Object.entries(dummyKeywords).map(([keyword, isActive]) => (
          <div key={keyword} className="w-full">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold">{keyword}</p>
                <div className="flex items-center gap-2">
                  {isActive ? (
                    <>
                      <BellIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <p>Notifications On</p>
                    </>
                  ) : (
                    <>
                      <BellOffIcon className="w-4 h-4 text-gray-500" />
                      <p className="text-gray-500">Notifications Off</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={isActive} />
                <Button variant="ghost">
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <DropdownMenuSeparator />
          </div>
        ))}
      </form>
    </div>
  );
}
