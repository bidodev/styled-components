import styled, {css} from "styled-components";

const StyledButton = styled.button`
    background-color: #fff;
    color: palevioletred;
    font-size: 1rem;
    margin: 1rem;
    padding: .5rem 1rem;
    border-radius: 3px;

    ${({primary})=> primary && css`
        background-color: palevioletred;
        color: #fff;
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0, 0.2)
    `}
`;

const SuperButton = styled(StyledButton) `
    font-size: 3rem;

`

const Button = ({ primary, children }) => {
  return (
    <>
    <StyledButton primary={primary}>{children}</StyledButton>
    <SuperButton primary={primary}>{children}</SuperButton>
    </>

  );
};
export default Button;
