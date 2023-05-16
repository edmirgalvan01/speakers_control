import {
  BiMicrophone,
  BiUser,
  BiCalendar,
  BiHome,
  BiMusic,
} from "react-icons/bi";
import { PrimaryButton } from "../../components/Buttons/Buttons";

import "./VisitsPage.css";
import { BackButton } from "../../components/BackButton/BackButton";

export const VisitsPage = () => {
  return (
    <section className="container-page visitsPage">
      <BackButton />
      <h1 className="title">Visitas</h1>
      <PrimaryButton>Nueva visita</PrimaryButton>
      <section className="table">
        <div className="visitCard">
          <div className="visitCard--item">
            <BiMicrophone color="345996" size="20" />
            <p>The Walt Disney Company</p>
          </div>
          <div className="visitCard--item">
            <BiUser color="345996" size="20" />
            <p>Ronald Richards</p>
          </div>
          <div className="visitCard--item">
            <BiCalendar color="345996" size="20" />
            <p>10/28/12</p>
          </div>
          <div className="visitCard--item">
            <BiHome color="345996" size="20" />
            <p>MasterCard</p>
          </div>
          <div className="visitCard--item">
            <BiMusic color="345996" size="20" />
            <p>Kiribati</p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="visitCard">
          <div className="visitCard--item">
            <BiMicrophone color="345996" size="20" />
            <p>The Walt Disney Company</p>
          </div>
          <div className="visitCard--item">
            <BiUser color="345996" size="20" />
            <p>Ronald Richards</p>
          </div>
          <div className="visitCard--item">
            <BiCalendar color="345996" size="20" />
            <p>10/28/12</p>
          </div>
          <div className="visitCard--item">
            <BiHome color="345996" size="20" />
            <p>MasterCard</p>
          </div>
          <div className="visitCard--item">
            <BiMusic color="345996" size="20" />
            <p>Kiribati</p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="visitCard">
          <div className="visitCard--item">
            <BiMicrophone color="345996" size="20" />
            <p>The Walt Disney Company</p>
          </div>
          <div className="visitCard--item">
            <BiUser color="345996" size="20" />
            <p>Ronald Richards</p>
          </div>
          <div className="visitCard--item">
            <BiCalendar color="345996" size="20" />
            <p>10/28/12</p>
          </div>
          <div className="visitCard--item">
            <BiHome color="345996" size="20" />
            <p>MasterCard</p>
          </div>
          <div className="visitCard--item">
            <BiMusic color="345996" size="20" />
            <p>Kiribati</p>
          </div>
          <div className="divider"></div>
        </div>
      </section>
    </section>
  );
};
