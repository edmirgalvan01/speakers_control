import { useNavigate } from "react-router-dom";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page flex-center home">
      <PrimaryButton onClick={() => navigate("/visits")}>Visitas</PrimaryButton>
      <SecondaryButton onClick={() => navigate("/speakers")}>
        Oradores locales
      </SecondaryButton>
    </section>
  );
};
