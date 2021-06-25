import styled from "styled-components";

export const QuestionsContainer = styled.section`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  padding: 24px;
  width: 100%;

  & + section {
    margin-top: 8px;
  }
  p {
    color: var(--gray);
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  p {
    margin-left: 10px;
    color: var(--gray);
  }
`;