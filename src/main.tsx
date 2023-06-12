import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { RegisterOutputPage } from "./pages/RegisterOutputPage/RegisterOutputPage";
import { RegisterSpeakerPage } from "./pages/RegisterSpeakerPage/RegisterSpeakerPage";
import { RegisterSpeechPage } from "./pages/RegisterSpeechPage/RegisterSpeechPage";
import { RegisterVisitPage } from "./pages/RegisterVisitPage/RegisterVisitPage";
import { SpeakerPage } from "./pages/SpeakerPage/SpeakerPage";
import { SpeakersPage } from "./pages/SpeakersPage/SpeakersPage";
import { VisitsPage } from "./pages/VisitsPage/VisitsPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register-output/:speakerId",
    element: <RegisterOutputPage />,
  },
  {
    path: "/register-speaker",
    element: <RegisterSpeakerPage />,
  },
  {
    path: "/register-speech/:speakerId",
    element: <RegisterSpeechPage />,
  },
  {
    path: "/register-visit",
    element: <RegisterVisitPage />,
  },
  {
    path: "/speaker/:id",
    element: <SpeakerPage />,
  },
  {
    path: "/speakers",
    element: <SpeakersPage />,
  },
  {
    path: "/visits",
    element: <VisitsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
