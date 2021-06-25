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

import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export const Home = () => {
  const history = useHistory();

  const [roomCode, setRoomCode] = useState("");
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/room/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();
    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exist.");
      return;
    }
    history.push(`/room/${roomCode}`);

    if (roomRef.val().endedAt) {
      alert("Room already closed");
    }
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
          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo Google" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <DivSeparator>Ou entre em uma sala</DivSeparator>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o códigoda sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </MainContent>
    </Container>
  );
};
