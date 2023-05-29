import {
  BiMicrophone,
  BiCalendar,
  BiHome,
  BiMusic,
  BiUser,
} from "react-icons/bi";
import "./CardInfoItem.css";

interface Props {
  type: "speaker" | "speech" | "date" | "congregation" | "song";
  data: string;
}

export const CardInfoItem = ({ type, data }: Props) => {
  const handleIcon = () => {
    if (type === "speaker") return <BiUser size="20" color="345996" />;
    if (type === "speech") return <BiMicrophone size="20" color="345996" />;
    if (type === "date") return <BiCalendar size="20" color="345996" />;
    if (type === "congregation") return <BiHome size="20" color="345996" />;
    if (type === "song") return <BiMusic size="20" color="345996" />;
  };

  return (
    <div className="CardInfoItem">
      {handleIcon()}
      <p>{data}</p>
    </div>
  );
};
