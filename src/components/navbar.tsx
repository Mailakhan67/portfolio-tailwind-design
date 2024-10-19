import { navItem } from "@/constant";
import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="h-[85px]
     bg-[#d1e8e2]
    drop-shadow-[0_0px_4px_rgba(117,195,16,1)] z-50 fixed top-0 left-0 w-full"
    >
      <div className=" flex items-center z-50  justify-between h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 max-w-7xl  ">
        <div className="flex gap-4 ">
          <h1 className=" text-[#F22F5A] font-bold text-[24px]">Maila's</h1>
          <span className="text-[#000000] font-bold text-[24px]">Portfplio</span>
        </div>
        <nav className="h-[44.54px]">
          <ul className="flex h-full w-full items-center justify-between gap-[46px] text-[#000000] text-[20px] font-medium">
            {navItem.map((items) => (
              <Link href={items.link}>
                {" "}
                <li>{items.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
