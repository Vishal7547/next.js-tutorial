const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1> user id: {params.user}</h1>
      <h1> user id: {params.hobbie}</h1>
    </div>
  );
};

export default page;
