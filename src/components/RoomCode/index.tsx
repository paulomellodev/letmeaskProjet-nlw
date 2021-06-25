import copyImg from "../../assets/images/copy.svg";
import { RoomCodeButton } from "./styles";

type RoomCodeProps = {
  code: string;
};

const RoomCode = ({ code }: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <RoomCodeButton onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy Room Code" />
      </div>
      <span>Sala #{code}</span>
    </RoomCodeButton>
  );
};

export default RoomCode;
