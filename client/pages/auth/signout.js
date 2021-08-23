import { useRouter } from "next/router";
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

const Signout = () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => {
      router.push("/");
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <div>
      <h1>Signing you out.</h1>
    </div>
  );
};

export default Signout;
