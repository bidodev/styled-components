import styled, { css } from "styled-components";
import {Wrapper, FadeIn} from "../components/styled/index";


const StyledButton = styled.button`
  background-color: #fff;
  color: palevioletred;
  font-size: 1rem;
  margin: ${({ margin }) => margin || "2rem"};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  animation: 5s ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: #fff;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  ${({ showBorderOnHover }) =>
    showBorderOnHover &&
    `
        
        &:hover {
            border: 1px solid red;
        }
        
        `}

  .someClass {
      color: blue;
  }
`;

const SuperButton = styled(StyledButton)`
  font-size: 3rem;
`;

const Button = ({ primary, children }) => {
  return (
    <Wrapper>
      <StyledButton showBorderOnHover={false} margin={"5rem"} primary={primary}>
        {children}
        <p className="someClass">Hello</p>
      </StyledButton>
      <SuperButton primary={primary}>{children}</SuperButton>
    </Wrapper>
  );
};
export default Button;
