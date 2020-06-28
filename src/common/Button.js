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

export const CartButton = styled.button`
  border: 1px solid var(--text-secondary);
  margin: 0 0.1rem;
  background-color: transparent;
  color: var(--text-secondary);
  width: 2rem;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: var(--text-primary);
    border: 1px solid var(--text-primary);
  }
  &:focus {
    outline:none;
  }
  }
`;

export const CheckOutButton = styled(NavButton)`
  margin: 1rem 1rem 0 0;
  border-radius: 5px;
  padding: 0.4rem 0.5rem;
  background-color: ${(props) => props.color || "var(--text-danger-dark)"};
  &:hover {
    color: var(--text-primary);
    background-color: ${(props) => props.color || "var(--text-danger-light)"};
  }
`;
