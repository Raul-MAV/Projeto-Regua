import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import insta from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import icon from './assets/icon.png';
import Agendamento from './components/agendamento/Agendamento.js';
import SelecaoServico from './components/selecaoservico/SelecaoServico.js';
import TelefoneInput from './components/telefoneinput/TelefoneInput.js';
import NomeInput from './components/nomeinput/NomeInput.js';
import React, { useState } from 'react';


function App() {
  const [showHorarios, setShowHorarios] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowHorarios(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} alt="Régua Barber Shop" className="logo" />
        <h1>Régua Barber Shop</h1>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="instagram-icon" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" />
          </a>
        </div>
      </header>
      <main>
        <section className="agendamento-section">
          <div className="agendamento-card">
            {!showHorarios ? (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className='Dados'>
                  <NomeInput />
                  <TelefoneInput />
                </div>
                <SelecaoServico />
                <button type="submit">Agendar</button>
              </form>
            ) : (
              <form className="horarios-form">
                <Agendamento />
                <div className='buttons'>
                  <button onClick={() => setShowHorarios(false)} className='voltar'>
                    Voltar
                  </button>
                  <button onClick={() => alert('Agendamento confirmado!')} className='confirmar'>
                    Confirmar Agendamento
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
