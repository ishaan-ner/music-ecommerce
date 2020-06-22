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
  font-family: var(--font-family-primary);
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    border-bottom: 1px solid white;
    color: var(--text-highlight);
  }
`;

export const DetailsButton = styled(NavButton)`
  letter-spacing: 0.05rem;
  padding: 0.3rem 0.5rem;
  margin: 1rem 0 0.5rem 0;
  &:disabled {
    color: var(--text-highlight);
  }
`;
