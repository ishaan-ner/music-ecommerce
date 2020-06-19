import styled from "styled-components";

export const NavButton = styled.button`
  color: var(--text-primary);
  background-color: transparent;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    border-bottom: 1px solid white;
  }
`;
