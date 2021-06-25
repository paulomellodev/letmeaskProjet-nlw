import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  padding: 24px;
  border-bottom: 1px solid var(--lightGray);
`;
export const HeaderContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`;

export const MainContainer = styled.main`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;

  > div {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      color: var(--gray);
    }

    span {
      margin-left: 16px;
      background: #e559f9;
      border-radius: 100px;
      padding: 8px 16px;
      color: var(--white);
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 10px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    resize: vertical;
    min-height: 130px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    p {
      font-size: 14px;
      color: #737380;
      font-weight: 500;
      button {
        background: transparent;
        border: 0;
        color: var(--purple);
        text-decoration: underline;
        font-size: 14px;
      }
    }
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  span {
    margin-left: 10px;
    color: var(--gray);
    font-weight: 500;
  }
`;

export const QuestionListContent = styled.div`
  display: flex;
  flex-direction: column;
`;
