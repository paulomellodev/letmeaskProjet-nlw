import styled from "styled-components";

export const RoomCodeButton = styled.button`
  height: 40px;
  border-radius: 10px;
  overflow: hidden;

  background: var(--white);
  border: 1px solid var(--purple);

  display: flex;
  align-items: stretch;

  div {
    background: var(--purple);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
`;
