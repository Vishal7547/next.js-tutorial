import Link from "next/link";
const page = ({ params }) => {
  console.log("hobbies", params);
  let a = params.user;
  return (
    <div>
      <h1>Your Hobbies</h1>
      <ul>
        <Link href={`../${a}/hobbies/cricket`}>Cricket</Link>
        <br />
        <Link href={`../${a}/hobbies/boxing`}>boxing</Link>
        <br />
        <Link href={`../${a}/hobbies/coding`}>coding</Link>
        <br />
        <Link href={`../${a}/hobbies/fighting`}>fighting</Link>
        <br />
        <Link href={`../${a}/hobbies/reading`}>reading</Link>
        <br />
      </ul>
    </div>
  );
};

export default page;
