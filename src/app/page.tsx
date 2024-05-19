import Profile from "@/components/profile";
import JobInformation from "@/components/jobInformation";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 mt-4">
      <Profile />
      <JobInformation />
    </div>
  );
}
