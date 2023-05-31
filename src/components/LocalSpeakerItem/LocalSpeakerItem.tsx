import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./LocalSpeakerItem.css";

interface Props {
  name: string;
  id: number;
}

export const LocalSpeakerItem = ({ name, id }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="localSpeakerItem" onClick={() => navigate(`/speaker/${id}`)}>
      <BiUser size="20" color="345996" />
      <p>{name}</p>
    </li>
  );
};
