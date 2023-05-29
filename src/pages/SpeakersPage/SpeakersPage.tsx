import { LocalSpeakersList } from "../../components/LocalSpeakersList/LocalSpeakersList";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import "./SpeakersPage.css";

export const SpeakersPage = () => {
  return (
    <section className="container-page flex-center-column speakersPage">
      <BackButton />
      <h1 className="title">Oradores locales</h1>
      <PrimaryButton>Nuevo orador</PrimaryButton>
      <LocalSpeakersList />
    </section>
  );
};
