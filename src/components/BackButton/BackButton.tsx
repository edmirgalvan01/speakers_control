import { IoIosArrowBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import "./BackButton.css";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="back-button">
      <IoIosArrowBack size="20" color="292929" onClick={() => navigate(-1)} />
    </div>
  );
};
