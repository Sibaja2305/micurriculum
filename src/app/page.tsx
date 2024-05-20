import Profile from "@/components/profile";
import JobInformation from "@/components/jobInformation";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-0 mt-2 md:mt-4">
    <Profile />
    <JobInformation />
  </div>
  );
}
