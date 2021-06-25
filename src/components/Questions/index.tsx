import { ReactNode } from "react";
import { QuestionsContainer, UserContent } from "./styles";

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

const QuestionsComponent = ({ content, author, children }: QuestionsProps) => {
  return (
    <QuestionsContainer>
      <p>{content}</p>
      <footer>
        <UserContent>
          <img src={author.avatar} alt={author.name} />
          <p>{author.name}</p>
        </UserContent>
        <div>{children}</div>
      </footer>
    </QuestionsContainer>
  );
};

export default QuestionsComponent;
