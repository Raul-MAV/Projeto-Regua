import React, { useState } from "react";
import "./NomeInput.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from './assets/banner.png';
import banner2 from './assets/banner2.png';
import banner3 from './assets/banner3.png';

<section className="carousel-section">
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      style={{ borderRadius: 10 }}
    >
      <SwiperSlide>
        <img src={banner} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  </section>

const NomeInput = () => {

  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  const validarNome = (valor) => {
    // Verifica se tem pelo menos duas palavras
    const partes = valor.trim().split(" ");
    return partes.length >= 2 && partes.every(p => p.length >= 2);
  };

  const handleChange = (e) => {
    const valor = e.target.value;
    setNome(valor);

    if (valor === "") {
      setErro("");
    } else if (!validarNome(valor)) {
      setErro("Por favor, digite nome e sobrenome.");
    } else {
      setErro("");
    }
  };

  return (
    <div className="nome-container">
      <label htmlFor="nome">Nome e sobrenome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder="Digite seu nome e sobrenome"
        value={nome}
        onChange={handleChange}
        required
      />
      {erro && <span className="nome-erro">{erro}</span>}
    </div>
  );
};


export default NomeInput;
