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

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid var(--purple);
  }

  &.answered {
    background: #dbdcdd;
  }

  p {
    color: var(--gray);
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      background: transparent;
      border: 0;
      &.like-button {
        display: flex;
        align-items: flex-end;
        span {
          color: var(--gray);
          background: transparent;
          padding: 0 10px;
        }
        &.liked {
          color: var(--purple);
          svg path {
            stroke: var(--purple);
          }
        }
      }
      &:hover {
        filter: brightness(0.7);
      }
    }
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
