import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300",
          className
        )}
        {...props}
      >
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/789/original/Screenshot_2024-01-23_at_4.04.48_PM-removebg-preview.png?1706005275"
          alt="logo"
          className="w-20"
        />
      </h2>
    </Link>
  );
};

export default Logo;
