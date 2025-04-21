import Saudacao from "@/app/components/shared/Saudacao";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span><Saudacao />, Jonas</span>
      <Link href={"dashboard"} 
        className="flex mt-4 bg-cyan-800 text-xs font-light uppercase tracking-wider 
                  text-white py-2 px-6 rounded-md hover:bg-cyan-950 cursor-pointer">
        Go Dashboard
      </Link>
    </div>
  );
}
