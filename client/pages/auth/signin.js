import React, { useState } from "react";
import { Grid, Button, Input, Spacer, Text, Page, Card } from "@geist-ui/react";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => {
      Router.push("/");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <Page>
      <Grid.Container gap={2} justify="center" height="100%">
        <Grid xs={24}>
          <Card shadow width="100%">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              >
                <Text h4>Email address</Text>
              </Input>

              <Spacer />

              <Input.Password
                initialValue="12345asdcb"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                hideToggle={true}
              >
                <Text h4>Password</Text>
              </Input.Password>

              <Spacer />

              <Button type="default" onClick={handleSubmit}>
                Sign In
              </Button>

              {errors}
            </form>
          </Card>
        </Grid>
      </Grid.Container>
    </Page>
  );
};

export default Signin;
