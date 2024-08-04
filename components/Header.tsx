import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="admin-header">
      <Link
        href="/"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        خانه
      </Link>
      <Link
        href="/find"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        بیمارستان یاب
      </Link>
      <Link
        href="/turn"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        سیستم نوبت دهی
      </Link>
      <Link
        href="/rules"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        قوانین
      </Link>
    </header>
  );
};

export default Header;
