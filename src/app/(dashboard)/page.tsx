import { Button } from "@/components/ui/button";

export default function friendsPage() {
  return (
    // flex-1 fills up all of the available space
    // divide-y creates a divider (line) between the header and the content
    // bring flex first! orer matters in className
    <div className="flex flex-1 flex-col divide-y">
      <header className="flex items-center justify-between p-4">
        <h1 className="font-semibold">Friends</h1>
        <Button size="sm">Add Friend</Button>
      </header>
    </div>
  );
}
