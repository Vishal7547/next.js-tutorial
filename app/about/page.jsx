import Link from "next/link";
const page = () => {
  return (
    <div>
      About Page
      <br />
      <Link href="/" className="flex h-max justify-center">
        Link to home page
      </Link>
    </div>
  );
};

export default page;
