import { LocalSpeakersList } from "../../components/LocalSpeakersList/LocalSpeakersList";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import "./SpeakersPage.css";

export const SpeakersPage = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page flex-center-column speakersPage">
      <BackButton />
      <h1 className="title">Oradores locales</h1>
      <PrimaryButton onClick={() => navigate("/register-speaker")} width="full">
        Nuevo orador
      </PrimaryButton>
      <LocalSpeakersList />
    </section>
  );
};
