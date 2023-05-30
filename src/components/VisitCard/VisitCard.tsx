import {
  BiMicrophone,
  BiUser,
  BiCalendar,
  BiHome,
  BiMusic,
} from "react-icons/bi";

import "./VisitCard.css";

interface Props {
  speech: string;
  speaker: string;
  date: string;
  congregation: string;
  song: string;
}

export const VisitCard = ({
  speech,
  speaker,
  date,
  congregation,
  song,
}: Props) => {
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
      <div className="visitCard--item">
        <BiMusic color="345996" size="20" />
        <p>{song}</p>
      </div>
      <div className="divider"></div>
    </div>
  );
};
