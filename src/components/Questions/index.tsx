import { QuestionsContainer, UserContent } from "./styles";

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

const QuestionsComponent = ({ content, author }: QuestionsProps) => {
  return (
    <QuestionsContainer>
      <p>{content}</p>
      <footer>
        <UserContent>
          <img src={author.avatar} alt={author.name} />
          <p>{author.name}</p>
        </UserContent>
        <div></div>
      </footer>
    </QuestionsContainer>
  );
};

export default QuestionsComponent;
