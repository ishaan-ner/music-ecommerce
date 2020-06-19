import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background-color: var(--dark-bg);
  padding: 0.5rem 4rem;
  height: 4.2rem;
  justify-content: space-between;
  align-items: center;
  & i {
    margin-right: 0.5rem;
  }
`;

export default Nav;
