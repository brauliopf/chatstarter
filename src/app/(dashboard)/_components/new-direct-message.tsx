import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { SidebarGroupAction } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export const NewDM = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarGroupAction>
          <PlusIcon />
          <span className="sr-only">New Direct Message</span>
        </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">New Direct Message</DialogTitle>
          <DialogDescription className="text-center">
            Enter a username to start a direct message.
          </DialogDescription>
        </DialogHeader>
        <form className="contents">
          <div className="flex flex-col gap-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" />
          </div>
          <DialogFooter>
            <Button className="w-full">Send DM</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
