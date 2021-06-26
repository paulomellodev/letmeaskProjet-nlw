import { ReactNode } from "react";
import { QuestionsContainer, UserContent } from "./styles";

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
};

const QuestionsComponent = ({
  content,
  author,
  children,
  isAnswered = false,
  isHighLighted = false,
}: QuestionsProps) => {
  return (
    <QuestionsContainer
      className={`
      ${isAnswered ? "answered" : ""} 
      ${isHighLighted && !isAnswered ? "highlighted" : ""}`}
    >
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
