import { PiggyBank } from "lucide-react";

import Link from "next/link";

function Logo({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Link href="/" className="flex  flex-col md:flex-row  items-center gap-2 ">
      {!isMobile && (
        <PiggyBank className="stroke h-9 w-9 stroke-amber-500 stroke-[1.5]"></PiggyBank>
      )}

      <p className=" text-wrap  bg-clip-text text-transparent text-xl md:text-2xl font-bold bg-linear-to-r from-amber-400 to-amber-500 tracking-tighter leading-tight">
        Budget Tracker
      </p>
    </Link>
  );
}
export default Logo;
