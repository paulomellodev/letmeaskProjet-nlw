import logoImg from "../assets/images/logo.svg";
import {
  Container,
  HeaderContent,
  MainContainer,
  FormContainer,
  HeaderContainer,
  UserContent,
  QuestionListContent,
} from "./roomStyles";

import Button from "../components/Button";
import RoomCode from "../components/RoomCode/index";
import QuestionsComponent from "../components/Questions";

import { useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { database } from "../services/firebase";
import { UseRoom } from "../hooks/RoomContext";

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState("");

  const { title, questions } = UseRoom(roomId);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.photo,
      },
      isHighLighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="LetmeAsk" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </HeaderContent>
      </HeaderContainer>

      <MainContainer>
        <div>
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionListContent>
          {questions.map((question) => {
            return (
              <QuestionsComponent
                key={question.id}
                author={question.author}
                content={question.content}
              />
            );
          })}
        </QuestionListContent>
      </MainContainer>
    </Container>
  );
};
