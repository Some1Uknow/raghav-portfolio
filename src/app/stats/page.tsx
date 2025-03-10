import GitHubActivity from "@/components/work/GitHubActivity";
import WakaTimeActivity from "@/components/work/WakaTimeActivity";
export default function page() {
  return (
    <div className="w-full py-10">
      <GitHubActivity username="some1uknow" />
      <WakaTimeActivity username="some1uknow" />
    </div>
  );
}
