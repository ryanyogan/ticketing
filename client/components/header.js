import { useRouter } from "next/router";
import React from "react";
import { Container, Menu } from "semantic-ui-react";

const Header = ({ currentUser }) => {
  const router = useRouter();

  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header link onClick={(e) => handleClick(e, "/")}>
          QikTix
        </Menu.Item>

        {currentUser ? (
          <Menu.Item
            position="right"
            as="a"
            onClick={(e) => handleClick(e, "/auth/signout")}
          >
            Sign Out
          </Menu.Item>
        ) : (
          <Menu.Item
            position="right"
            as="a"
            onClick={(e) => handleClick(e, "/auth/signin")}
          >
            Sign In
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default Header;
