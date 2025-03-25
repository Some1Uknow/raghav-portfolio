import GitHubActivity from "@/components/work/GitHubActivity";
import WakaTimeActivity from "@/components/work/WakaTimeActivity";

export default function page() {
  return (
    <div className="w-full max-w-[95%] mx-auto container flex flex-col gap-4">
      <GitHubActivity username="some1uknow" />
      <WakaTimeActivity username="some1uknow" />
    </div>
  );
}
