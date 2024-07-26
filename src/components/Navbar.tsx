import Link from "next/link";
import { MoonIcon } from "@heroicons/react/16/solid";

function Navbar() {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center bg-container dark:bg-container-dark shadow p-8">
      <Link href="/">
        <h1 className="font-bold">Where in the World?</h1>
      </Link>
      <div className="flex gap-2 items-center">
        <MoonIcon height={30} />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Navbar;
