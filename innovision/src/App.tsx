import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Global/Header';
import LandingPage from './LandingPage/LandingPage';
import CadUser from './FormsLogin/CadUser';
import CadAuto from './FormsLogin/CadAuto';
import Services from './Services/Services';
import Custos from './Services/Custos';
import Perfil from './Services/Perfil';
import AlterarPerfil from './Services/AlterarPerfi';
import HeaderLogado from './Global/HeaderLogado';
import Chat from './Chatbot/Chat';
import Footer from './Global/Footer';
import Integrantes from './Global/Integrantes';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <CadUser />
              <Footer />
            </>
          }
        />
        <Route
          path="/cad-auto"
          element={
            <>
              <Header />
              <CadAuto />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/custos"
          element={
            <>
              <Header />
              <Custos/>
              <Footer />
            </>
          }
        />
        <Route
          path="/perfil"
          element={
            <>
              <HeaderLogado />
              <Perfil />
              <Footer />
            </>
          }
        />
        <Route
          path="/alterarperfil"
          element={
            <>
              <HeaderLogado />
              <AlterarPerfil />
              <Footer />
            </>
          }
        />
        <Route
          path="/integrantes"
          element={
            <>
              <Header />
              <Integrantes />
              <Footer />
            </>
          }
        />

        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
