import { BiUser } from "react-icons/bi";
import "./LocalSpeakerItem.css";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
}

export const LocalSpeakerItem = ({ name }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="localSpeakerItem" onClick={() => navigate(`/speaker/${1}`)}>
      <BiUser size="20" color="345996" />
      <p>{name}</p>
    </li>
  );
};
