const page = ({ params }) => {
  console.log(params.user);
  return <div>User:{params.user}</div>;
};

export default page;
