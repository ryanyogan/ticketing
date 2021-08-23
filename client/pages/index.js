import buildClient from "../api/build-client";

const IndexPage = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div>
      <h1>Index Pages</h1>
    </div>
  );
};

IndexPage.getInitialProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client
    .get("/api/users/currentuser")
    .catch((err) => console.error(err));

  return data;
};

export default IndexPage;
