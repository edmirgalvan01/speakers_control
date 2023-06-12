import { BiMicrophone, BiUser, BiCalendar, BiHome } from "react-icons/bi";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import "./VisitCard.css";

interface Props {
  speech: string;
  speaker: string;
  date: string;
  congregation: string;
  id: number;
}

export const VisitCard = ({
  speech,
  speaker,
  date,
  congregation,
  id,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="visitCard">
      <div className="visitCard--item">
        <BiMicrophone color="345996" size="20" />
        <strong>{speech}</strong>
      </div>
      <div className="visitCard--item">
        <BiUser color="345996" size="20" />
        <p>{speaker}</p>
      </div>
      <div className="visitCard--item">
        <BiCalendar color="345996" size="20" />
        <p>{date}</p>
      </div>
      <div className="visitCard--item">
        <BiHome color="345996" size="20" />
        <p>{congregation}</p>
      </div>
      <div className="visitCard--buttons">
        <PrimaryButton onClick={() => navigate(`/edit-visit/${id}`)}>
          Editar
        </PrimaryButton>
        <SecondaryButton>Eliminar</SecondaryButton>
      </div>
      <div className="divider"></div>
    </div>
  );
};
