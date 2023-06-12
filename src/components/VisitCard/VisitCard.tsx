import {
  BiMicrophone,
  BiUser,
  BiCalendar,
  BiHome,
  BiMusic,
} from "react-icons/bi";

import "./VisitCard.css";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";

interface Props {
  speech: string;
  speaker: string;
  date: string;
  congregation: string;
}

export const VisitCard = ({ speech, speaker, date, congregation }: Props) => {
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
        <PrimaryButton>Editar</PrimaryButton>
        <SecondaryButton>Eliminar</SecondaryButton>
      </div>
      <div className="divider"></div>
    </div>
  );
};
