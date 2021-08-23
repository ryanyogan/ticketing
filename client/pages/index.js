import axios from "axios";

const IndexPage = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div>
      <h1>Index Pages</h1>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // We are within the context of the container in the cluster
  } else {
    // We are on the browser, standard ingress request
  }

  const response = await axios
    .get("/api/users/currentuser")
    .catch((err) => console.log(err));

  return response.data;
};

export default IndexPage;
