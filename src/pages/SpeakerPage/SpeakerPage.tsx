import { BackButton } from "../../components/BackButton/BackButton";
import { BiMicrophone, BiCalendar, BiHome, BiMusic } from "react-icons/bi";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import "./SpeakerPage.css";
import { useNavigate } from "react-router-dom";

export const SpeakerPage = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page flex-center-column speakerPage">
      <BackButton />
      <h1 className="title">Edmir Galvan</h1>
      <div className="speakerPage--buttons">
        <PrimaryButton onClick={() => navigate("/register-output")}>
          Nueva salida
        </PrimaryButton>
        <SecondaryButton onClick={() => navigate("/register-speech")}>
          Nuevo discurso
        </SecondaryButton>
      </div>
      <div className="SpeakerOutputsList">
        <h3>Salidas</h3>
        <ul>
          <li className="SpeakerOutputItem">
            <div className="output--item">
              <BiMicrophone size="20" color="345996" />
              <p>¿Como hacernos amigos de Jehova?</p>
            </div>
            <div className="output--item">
              <BiCalendar size="20" color="345996" />
              <p>10/08/23</p>
            </div>
            <div className="output--item">
              <BiHome size="20" color="345996" />
              <p>Zaragoza</p>
            </div>
            <div className="output--item">
              <BiMusic size="20" color="345996" />
              <p>Una oracion ferviente</p>
            </div>
          </li>
          <li className="SpeakerOutputItem">
            <div className="output--item">
              <BiMicrophone size="20" color="345996" />
              <p>¿Como hacernos amigos de Jehova?</p>
            </div>
            <div className="output--item">
              <BiCalendar size="20" color="345996" />
              <p>10/08/23</p>
            </div>
            <div className="output--item">
              <BiHome size="20" color="345996" />
              <p>Zaragoza</p>
            </div>
            <div className="output--item">
              <BiMusic size="20" color="345996" />
              <p>Amigos de Jehova</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="SpeakerSpeechesList">
        <h3>Discursos</h3>
        <ul className="SpeakerSpeechesList">
          <li className="SpeakerSpeechItem">
            <div className="output--item">
              <BiMicrophone size="20" color="345996" />
              <p>¿Como hacernos amigos de Jehova?</p>
            </div>
            <div className="output--item">
              <BiMusic size="20" color="345996" />
              <p>Amigos de Jehova</p>
            </div>
          </li>
          <li className="SpeakerSpeechItem">
            <div className="output--item">
              <BiMicrophone size="20" color="345996" />
              <p>¿Como hacernos amigos de Jehova?</p>
            </div>
            <div className="output--item">
              <BiMusic size="20" color="345996" />
              <p>Amigos de Jehova</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
