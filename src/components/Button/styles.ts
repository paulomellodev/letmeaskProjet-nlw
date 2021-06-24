import styled from "styled-components";

export const GeneralButton = styled.button`
  margin-top: 60px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--purple);
  color: var(--white);
  padding: 0 32xp;

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
`;
