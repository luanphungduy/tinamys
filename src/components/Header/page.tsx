import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between bg-sky-100">
      <div className="my-0 mx-auto max-w-[1380px]">
        <Link href="/">
          <Logo />
        </Link>
        <div>Action</div>
      </div>
    </div>
  );
};

export default Header;
