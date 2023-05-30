import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { BackButton } from "../../components/BackButton/BackButton";
import { VisitCard } from "../../components/VisitCard/VisitCard";
import { useGetVisits } from "../../hooks/useVisits";
import "./VisitsPage.css";

export const VisitsPage = () => {
  const navigate = useNavigate();
  const { visits, error } = useGetVisits();

  return (
    <section className="container-page visitsPage">
      <BackButton />
      <h1 className="title">Visitas</h1>
      <PrimaryButton onClick={() => navigate("/register-visit")}>
        Nueva visita
      </PrimaryButton>
      <section className="table">
        {error ? (
          <p>Ocurrio un error</p>
        ) : (
          visits.map((visit) => (
            <VisitCard
              key={visit.id}
              speech={visit.speech_title}
              speaker={visit.speaker_name}
              date={visit.visit_date}
              congregation={visit.speaker_congregation}
              song={visit.speech_song}
            />
          ))
        )}
      </section>
    </section>
  );
};
