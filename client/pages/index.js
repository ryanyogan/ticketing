import buildClient from "../api/build-client";

const IndexPage = ({ currentUser }) => {
  return currentUser ? <h1>Signed in</h1> : <h1>Not signed in</h1>;
};

IndexPage.getInitialProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client
    .get("/api/users/currentuser")
    .catch((err) => console.error(err));

  return data;
};

export default IndexPage;
