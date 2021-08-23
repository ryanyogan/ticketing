import axios from "axios";

const IndexPage = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div>
      <h1>Index Pages</h1>
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const { data } = await axios
      .get(
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
        {
          headers: req.headers,
        }
      )
      .catch((err) => console.log(err));
    // We are within the context of the container in the cluster
    return data;
  } else {
    // We are on the browser, standard ingress request
    const { data } = await axios
      .get("/api/users/currentuser")
      .catch((err) => console.log(err));
    return data;
  }
};

export default IndexPage;
