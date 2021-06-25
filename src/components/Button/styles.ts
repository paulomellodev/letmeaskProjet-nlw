import styled, { css } from "styled-components";

type ButtonProps = {
  isOutlined?: boolean;
};

export const GeneralButton = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--purple);
  color: var(--white);
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 10px;
  }

  :not(:disabled):hover {
    filter: brightness(0.85);
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isOutlined &&
    css`
      background: var(--white);
      color: var(--purple);
      border: 1px solid var(--purple);
    `};
`;
