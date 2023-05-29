import { LocalSpeakerItem } from "../../components/LocalSpeakerItem/LocalSpeakerItem";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import "./SpeakersPage.css";

export const SpeakersPage = () => {
  return (
    <section className="container-page flex-center-column speakersPage">
      <BackButton />
      <h1 className="title">Oradores locales</h1>
      <PrimaryButton>Nuevo orador</PrimaryButton>
      <ul className="localSpeakersList">
        <LocalSpeakerItem name="Jhonathan Olmos" />
        <LocalSpeakerItem name="Isaac Gomez" />
        <LocalSpeakerItem name="Marcos Sanchez" />
        <LocalSpeakerItem name="Sergio Herrera" />
        <LocalSpeakerItem name="David Lopez" />
        <LocalSpeakerItem name="Sirenio Gomez" />
      </ul>
    </section>
  );
};
