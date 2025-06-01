import React, { useState } from "react";
import "./SelecaoServico.css";

const servicos = [
  { id: "corte", nome: "Corte de Cabelo", imagem: "./assets/servicos/corte.png" },
  { id: "barba", nome: "Barba", imagem: "./assets/servicos/barba.png" },
  { id: "sobrancelha", nome: "Sobrancelha", imagem: "./assets/servicos/sobrancelha.png" },
  { id: "pigmentacao", nome: "Pigmentação Capilar", imagem: "./assets/servicos//pigmentacao.png" },
  { id: "hidratacao", nome: "Hidratação Capilar", imagem: "./assets/servicos/hidratacao.png" },
  { id: "platinado", nome: "Platinado", imagem: "./assets/servicos/platinado.png" },
  { id: "relaxamento", nome: "Relaxamento", imagem: "./assets/servicos/relaxamento.png" },
  { id: "limpeza-pele", nome: "Limpeza de Pele", imagem: "./assets/servicos/limpeza-pele.png" },
  { id: "design-barba", nome: "Design de Barba", imagem: "./assets/servicos/design-barba.png" },
  { id: "luzes", nome: "Luzes Masculinas", imagem: "./assets/servicos/luzes.png" },
];

const SelecaoServico = () => {
  const [selecionados, setSelecionados] = useState([]);
  // A classe de estilização dos botões é "selecao-card"
  const toggleSelecionado = (id) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="selecao-container">
      <label className="selecao-label">Selecione os serviços desejados:</label>
      <div className="selecao-cards">
        {servicos.map((servico) => (
          <button
            key={servico.id}
            className={`selecao-card-servicos ${
              selecionados.includes(servico.id) ? "selecionado" : ""
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
            {selecionados.map((id) => (
              <li key={id}>
                {servicos.find((s) => s.id === id).nome}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelecaoServico;
