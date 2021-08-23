import React, { useState } from "react";
import useRequest from "../../hooks/use-request";
import Router from "next/router";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import Link from "next/link";

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
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="teal" textAlign="center">
          Sign In
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Button color="teal" fluid size="large" onClick={handleSubmit}>
              Sign In
            </Button>
          </Segment>
        </Form>

        <Message>
          Not a member?{" "}
          <Link href="/auth/signup">
            <a>Sign Up!</a>
          </Link>
        </Message>

        {errors}
      </Grid.Column>
    </Grid>
  );
};

export default Signin;
