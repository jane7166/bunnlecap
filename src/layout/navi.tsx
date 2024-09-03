import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Container>
      <Logo onClick={() => router.push("/")}>
        Wiggle Wiggle
      </Logo>
      <NavItems>
        <Item
          onClick={() => router.push("/game")}
          $isClicked={pathname === "/game"}
        >
          Game
        </Item>
        <Item
          onClick={() => router.push("/dashboard")}
          $isClicked={pathname === "/dashboard"}
        >
          Dashboard
        </Item>
        <Item
          onClick={() => router.push("/editor")}
          $isClicked={pathname === "/editor"}
        >
          Editor
        </Item>
        <Item
          onClick={() => router.push("/market-place")}
          $isClicked={pathname.startsWith("/market-place")}
        >
          Market Place
        </Item>
        <Item
          onClick={() => router.push("/my")}
          $isClicked={pathname === "/my"}
        >
          My
        </Item>
      </NavItems>
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  background: #101010;
  width: 100vw;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Logo = styled.div`
  color: white;
  font-family: Acme, sans-serif;
  font-size: 50px;
  line-height: 90%;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
`;

const Item = styled.div<{ $isClicked: boolean }>`
  color: ${(props) => (props.$isClicked ? props.theme.colors.primary : 'white')};
  font-size: 40px;
  line-height: 90%;
  cursor: pointer;
  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }
`;
