import React, { useState } from "react";
import "./SelecaoServico.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from './assets/banner.png';
import banner2 from './assets/banner2.png';
import banner3 from './assets/banner3.png';



const servicos = [
  { id: "corte", nome: "Corte de Cabelo", valor: "R$ 50,00", imagem: "./assets/servicos/corte.png" },
  { id: "barba", nome: "Barba", valor: "R$ 30,00", imagem: "./assets/servicos/barba.png" },
  { id: "sobrancelha", nome: "Sobrancelha", valor: "R$ 20,00", imagem: "./assets/servicos/sobrancelha.png" },
  { id: "pigmentacao", nome: "Pigmentação Capilar", valor: "R$ 100,00", imagem: "./assets/servicos//pigmentacao.png" },
  { id: "hidratacao", nome: "Hidratação Capilar", valor: "R$ 80,00", imagem: "./assets/servicos/hidratacao.png" },
  { id: "platinado", nome: "Platinado", valor: "R$ 150,00", imagem: "./assets/servicos/platinado.png" },
  { id: "relaxamento", nome: "Relaxamento", valor: "R$ 120,00", imagem: "./assets/servicos/relaxamento.png" },
  { id: "limpeza-pele", nome: "Limpeza de Pele", valor: "R$ 90,00", imagem: "./assets/servicos/limpeza-pele.png" },
  { id: "design-barba", nome: "Design de Barba", valor: "R$ 40,00", imagem: "./assets/servicos/design-barba.png" },
  { id: "luzes", nome: "Luzes Masculinas", valor: "R$ 200,00", imagem: "./assets/servicos/luzes.png" },
];

const SelecaoServico = () => {
  const [selecionados, setSelecionados] = useState([]);
  // A classe de estilização dos botões é "selecao-card"
  const toggleSelecionado = (id) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calcula o valor total dos serviços selecionados
  const valorTotal = selecionados.reduce((total, id) => {
    const servico = servicos.find((s) => s.id === id);
    if (!servico) return total;
    // Extrai o número do valor (ex: "R$ 50,00" -> 50.00)
    const valorNumerico = parseFloat(servico.valor.replace("R$", "").replace(".", "").replace(",", ".").trim());
    return total + (isNaN(valorNumerico) ? 0 : valorNumerico);
  }, 0);

  return (
    <div className="selecao-container">
      <label className="selecao-label">Selecione os serviços desejados:</label>
      <div className="selecao-cards">
        {servicos.map((servico) => (
          <button
            key={servico.id}
            className={`selecao-card-servicos ${selecionados.includes(servico.id) ? "selecionado" : ""
              }`}
            onClick={() => toggleSelecionado(servico.id)}
            type="button"
            style={{
              "--imagem-hover": `url(${servico.imagem})`,
            }}
          >
            {servico.nome}
          </button>
        ))}
      </div>

      {selecionados.length > 0 && (
        <div className="selecao-resultado">
          Serviços selecionados:
          <ul>
            {selecionados.map((id) => {
              const servico = servicos.find((s) => s.id === id);
              return (
                <li key={id}>
                  {servico.nome} - {servico.valor}
                </li>
              );
            })}
          </ul>
          <div className="selecao-total">
            <strong>Total: R$ {valorTotal.toFixed(2).replace('.', ',')}</strong>
          </div>
        </div>
      )}

    </div>
  );
};

export default SelecaoServico;
