import styled from "styled-components";
import { Link } from "react-router-dom";

import logoIcon from "../../../icons/stackers.svg";

const HEADER_TEXT = "Task tracker";
export const HEADER_HEIGHT = "62px";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: #3a74f7;
  color: white;
  font-size: 20px;

  position: sticky;
  height: ${HEADER_HEIGHT};
  top: 0;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  background-color: white;
`;

const LogoWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/">{HEADER_TEXT}</StyledLink>
      <LogoWrapper>
        <StyledLink to="/projects"> My Projects </StyledLink>
        <Logo src={logoIcon} alt="logo" />
      </LogoWrapper>
    </Wrapper>
  );
};

export default Header;
