import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  border: 1px solid ${({primary}) => primary ? '#000' : '#fff'};
  color: ${props => props.primary ? '#000' : '#fff'};
  background-color: ${props => props.primary ? '#fff' : '#000'};
`;

const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};
export default Button;
