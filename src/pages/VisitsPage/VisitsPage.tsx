import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { BackButton } from "../../components/BackButton/BackButton";
import { VisitCard } from "../../components/VisitCard/VisitCard";
import { PostgrestError } from "@supabase/supabase-js";
import { Visit } from "../../types/visits";
import "./VisitsPage.css";

export const VisitsPage = () => {
  const navigate = useNavigate();

  const [visits, setVisits] = useState<Array<Visit>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  const getVisits = async () => {
    const { data, error } = await supabase.from("visits").select();

    return { data, error };
  };

  useEffect(() => {
    getVisits().then(({ data, error }) => {
      setVisits(data as Array<Visit>);
      setError(error);
    });
  }, []);

  return (
    <section className="container-page visitsPage">
      <BackButton />
      <h1 className="title">Visitas</h1>
      <PrimaryButton onClick={() => navigate("/register-visit")}>
        Nueva visita
      </PrimaryButton>
      <section className="table">
        {visits.map((visit) => (
          <VisitCard
            key={visit.id}
            speech={visit.speech_title}
            speaker={visit.speaker_name}
            date={visit.visit_date}
            congregation={visit.speaker_congregation}
            song={visit.speech_song}
          />
        ))}
      </section>
    </section>
  );
};
