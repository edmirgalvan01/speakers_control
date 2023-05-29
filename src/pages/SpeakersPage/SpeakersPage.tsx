import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { BiUser } from "react-icons/bi";
import "./SpeakersPage.css";

export const SpeakersPage = () => {
  return (
    <section className="container-page flex-center-column speakersPage">
      <BackButton />
      <h1 className="title">Oradores locales</h1>
      <PrimaryButton>Nuevo orador</PrimaryButton>
      <ul className="localSpeakersList">
        <li className="localSpeakerItem">
          <BiUser size="20" color="345996" />
          <p>Ronald Richards</p>
        </li>
        <li className="localSpeakerItem">
          <BiUser size="20" color="345996" />
          <p>Ronald Richards</p>
        </li>
        <li className="localSpeakerItem">
          <BiUser size="20" color="345996" />
          <p>Ronald Richards</p>
        </li>
        <li className="localSpeakerItem">
          <BiUser size="20" color="345996" />
          <p>Ronald Richards</p>
        </li>
        <li className="localSpeakerItem">
          <BiUser size="20" color="345996" />
          <p>Ronald Richards</p>
        </li>
        <li className="localSpeakerItem">
          <BiUser size="20" color="345996" />
          <p>Ronald Richards</p>
        </li>
      </ul>
    </section>
  );
};
