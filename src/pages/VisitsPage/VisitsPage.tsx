/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { BackButton } from "../../components/BackButton/BackButton";
import { VisitCard } from "../../components/VisitCard/VisitCard";
import { useGetOrderVisits } from "../../hooks/useGetOrderVisits";
import "./VisitsPage.css";

export const VisitsPage = () => {
  const navigate = useNavigate();
  const { visits, error } = useGetOrderVisits(true);

  return (
    <section className="container-page visitsPage">
      <BackButton />
      <h1 className="title">Visitas</h1>
      <PrimaryButton onClick={() => navigate("/register-visit")} width="full">
        Nueva visita
      </PrimaryButton>
      <section className="table">
        {error ? (
          <p>Ocurrio un error</p>
        ) : (
          visits.map((visit) => (
            <VisitCard
              key={visit.id}
              id={visit.id!}
              speech={visit.speech_title}
              speaker={visit.speaker_name}
              date={visit.visit_date}
              congregation={visit.speaker_congregation}
            />
          ))
        )}
      </section>
    </section>
  );
};
