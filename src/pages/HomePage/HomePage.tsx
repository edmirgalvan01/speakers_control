import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <section className="container-page flex-center home">
      <PrimaryButton>Visitas</PrimaryButton>
      <SecondaryButton>Oradores locales</SecondaryButton>
    </section>
  );
};
