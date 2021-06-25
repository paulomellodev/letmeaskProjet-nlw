import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import {
  Container,
  HeaderContent,
  MainContainer,
  HeaderContainer,
  QuestionListContent,
} from "./roomStyles";

import Button from "../components/Button";
import RoomCode from "../components/RoomCode/index";
import QuestionsComponent from "../components/Questions";

import { useHistory, useParams } from "react-router-dom";
// import { useAuth } from "../hooks/AuthContext";
import { UseRoom } from "../hooks/RoomContext";
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = UseRoom(roomId);

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push("/");
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm("Tem certeza que quer deletar essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="LetmeAsk" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
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
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover Pergunta" />
                </button>
              </QuestionsComponent>
            );
          })}
        </QuestionListContent>
      </MainContainer>
    </Container>
  );
};
