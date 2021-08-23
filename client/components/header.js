import { useRouter } from "next/router";
import React from "react";
import { Container, Menu } from "semantic-ui-react";

const Header = ({ currentUser }) => {
  const router = useRouter();

  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };

  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Menu.Item
          key={href}
          as="a"
          header
          onClick={(e) => handleClick(e, href)}
        >
          {label}
        </Menu.Item>
      );
    });

  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header link onClick={(e) => handleClick(e, "/")}>
          QikTix
        </Menu.Item>

        {links}
      </Container>
    </Menu>
  );
};

export default Header;
