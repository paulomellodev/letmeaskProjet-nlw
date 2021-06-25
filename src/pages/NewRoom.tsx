import { Link, useHistory } from "react-router-dom";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import Button from "../components/Button";

import { Container, AsideContent, MainContent } from "./homeStyles";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/AuthContext";

export const NewRoom = () => {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  const history = useHistory();
  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/room/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />
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
