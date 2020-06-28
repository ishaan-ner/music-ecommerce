import { NavButton } from "./Button";
import styled from "styled-components";

export const StyledCheckout = styled.div`
  background: var(--gradient-bg);
  box-shadow: var(--box-shadow-light);
  letter-spacing: 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1rem 2rem;
  width: 40%;
  margin: 2rem 5rem 1rem auto;
  font-family: var(--font-family-primary);
  color: var(--text-primary);
  text-transform: uppercase;
  @media (max-width: 600px) {
    width: 90%;
    margin: 2rem auto;
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

export const StyledTable = styled.table`
  border-radius: 10px;
  margin: 0 5rem;
  padding: 1rem 3rem;
  display: grid;
  overflow-x: auto;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  align-items: center;
  background: var(--gradient-bg);
  box-shadow: var(--box-shadow-light);
  thead,
  tbody {
    display: contents;
  }
  tr {
    display: contents;
  }

  th {
    color: var(--text-primary);
    font-family: var(--font-family-primary);
    font-size: 1rem;
    text-transform: uppercase;
  }

  td {
    color: var(--text-secondary);
    font-family: var(--font-family-secondary);
    text-align: center;
    width: 100%;
    font-size: 0.9rem;
  }

  .cart-img-container {
    width: 5rem;
    height: 5rem;
    justify-self: center;
    box-shadow: var(--box-shadow-light);
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .cart-total {
    color: var(--text-highlight);
    font-size: 1rem;
  }

  .control-buttons {
    display: flex;
    justify-content: center;
  }

  i {
    font-size: 1.2rem;
    &:hover {
      color: var(--text-primary);
    }
    cursor: pointer;
  }
  
  @media(max-width:600px){
    width:90%;
    margin 2rem auto;
  }
`;
