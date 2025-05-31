import React, { useState } from "react";
import "./SelecaoServico.css";

const servicos = [
  { id: "corte", nome: "Corte de Cabelo", imagem: "./assets/servicos/corte.png" },
  { id: "barba", nome: "Barba", imagem: "/imagens/barba.jpg" },
  { id: "sobrancelha", nome: "Sobrancelha", imagem: "/imagens/sobrancelha.jpg" },
  { id: "pigmentacao", nome: "Pigmentação Capilar", imagem: "/imagens/pigmentacao.jpg" },
  { id: "hidratacao", nome: "Hidratação Capilar", imagem: "/imagens/hidratacao.jpg" },
  { id: "platinado", nome: "Platinado", imagem: "/imagens/platinado.jpg" },
  { id: "relaxamento", nome: "Relaxamento", imagem: "/imagens/relaxamento.jpg" },
  { id: "limpeza-pele", nome: "Limpeza de Pele", imagem: "/imagens/limpeza-pele.jpg" },
  { id: "design-barba", nome: "Design de Barba", imagem: "/imagens/design-barba.jpg" },
  { id: "luzes", nome: "Luzes Masculinas", imagem: "/imagens/luzes.jpg" },
];

const SelecaoServico = () => {
  const [selecionados, setSelecionados] = useState([]);

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
            className={`selecao-card ${
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
