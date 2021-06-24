import { Link } from "react-router-dom";

import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import Button from "../components/Button";

import { Container, AsideContent, MainContent } from "./homeStyles";

export const NewRoom = () => {
  return (
    <Container>
      <AsideContent>
        <img src={illustration} alt="Perguntas e respostas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </AsideContent>
      <MainContent>
        <div>
          <img src={logo} alt="Logo Let me Ask" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </MainContent>
    </Container>
  );
};
