import styled from "styled-components";

const PageTitle = styled.h1`
  letter-spacing: 0.2rem;
  text-align: center;
  margin-top: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--text-primary);
  @media (max-width: 320px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    margin: 1rem;
  }
`;

export default PageTitle;
