import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ color }) => css`
      background: ${color};
      width: 160px;
      margin: 0 auto;
      text-align: center;
      cursor: pointer;
      color: white;
      border: none;
      height: 32px;
    }
  `,
);

const Button = ({ label = '', onClick = () => {}, disabled = false, color = "#3a74f7" }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} color={color}>
      {label}
    </StyledButton>
  );
};

export default Button;
