import { useAuth } from "../hooks/AuthContext";
import { useHistory } from "react-router-dom";

import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import Button from "../components/Button";

import {
  Container,
  AsideContent,
  MainContent,
  DivSeparator,
  CreateRoomButton,
} from "./homeStyles";

export const Home = () => {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/room/new");
  };

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
          {user && <p>{user.name}</p>}
          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo Google" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <DivSeparator>Ou entre me uma sala</DivSeparator>
          <form action="">
            <input type="text" placeholder="Digite o códigoda sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </MainContent>
    </Container>
  );
};
