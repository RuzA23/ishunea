import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Navbar = () => {
  return (
    <header className="w-full z-101">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify -center items-center">
          <Image
            src="/logo.svg"
            alt=" Car Hub Logo"
            width={180}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue bg-white rounded-full border border-primary-blue px-4 py-2 min-w-[130px] shadow-lg"
        />
      </nav>
    </header>
  );
};

export default Navbar;
