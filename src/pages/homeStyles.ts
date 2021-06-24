import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const AsideContent = styled.aside`
  flex: 6;

  background: var(--purple);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  h1 {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }
  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
  }
`;

export const MainContent = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: "Poppins", sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 10px;
        padding: 0 16px;
        background: var(--white);
        border: 1px solid var(--lightGray);
        width: 100%;
      }

      button {
        width: 100%;
        margin-top: 16px;
      }
    }
    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }
`;

export const CreateRoomButton = styled.button`
  margin-top: 60px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--googleRed);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 10px;
  }

  :hover {
    filter: brightness(0.85);
  }
`;

export const DivSeparator = styled.div`
  font-size: 14px;
  color: #a8a8b3;
  margin: 32px 0;

  display: flex;
  align-items: center;

  ::before {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  ::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`;
