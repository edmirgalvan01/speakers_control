import { PrimaryButton } from "../../components/Buttons/Buttons";
import { BackButton } from "../../components/BackButton/BackButton";
import { VisitCard } from "../../components/VisitCard/VisitCard";

import { useNavigate } from "react-router-dom";

import "./VisitsPage.css";

export const VisitsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page visitsPage">
      <BackButton />
      <h1 className="title">Visitas</h1>
      <PrimaryButton onClick={() => navigate("/register-visit")}>
        Nueva visita
      </PrimaryButton>
      <section className="table">
        <VisitCard
          speech="¿Cómo ser amigos de Jehová?"
          speaker="Isaac Gómez Reyes"
          date="10/03/22"
          congregation="Halliburton"
          song="Una oración ferviente"
        />
        <VisitCard
          speech="¿Cómo ser amigos de Jehová?"
          speaker="Isaac Gómez Reyes"
          date="10/03/22"
          congregation="Halliburton"
          song="Una oración ferviente"
        />
        <VisitCard
          speech="¿Cómo ser amigos de Jehová?"
          speaker="Isaac Gómez Reyes"
          date="10/03/22"
          congregation="Halliburton"
          song="Una oración ferviente"
        />
      </section>
    </section>
  );
};
