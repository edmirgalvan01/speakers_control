import { BiMicrophone, BiUser, BiCalendar, BiHome } from "react-icons/bi";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import "./VisitCard.css";
import { useVisit } from "../../hooks/useVisit";
import { useFormatDate } from "../../hooks/useFormatDate";

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
  const { removeVisit } = useVisit();
  const dateToUse = useFormatDate(date);

  const formattedDate = new Date(date);
  const today = new Date();
  const isCompleted = today > formattedDate;

  const handleClickDelete = async () => {
    const response = await removeVisit(id);
    if (response.success) window.location.reload();
  };

  return (
    <div className={`visitCard ${isCompleted && "completed"}`}>
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
        <p>{dateToUse}</p>
      </div>
      <div className="visitCard--item">
        <BiHome color="345996" size="20" />
        <p>{congregation}</p>
      </div>
      <div className="visitCard--buttons">
        <PrimaryButton onClick={() => navigate(`/edit-visit/${id}`)}>
          Editar
        </PrimaryButton>
        <SecondaryButton onClick={handleClickDelete}>Eliminar</SecondaryButton>
      </div>
      <div className="divider"></div>
    </div>
  );
};
