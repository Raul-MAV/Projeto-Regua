import React, { useState } from "react";
import "./Agendamento.css";

// Gera os próximos 7 dias
const gerarProximosSeteDias = () => {
  const dias = [];
  const hoje = new Date();

  for (let i = 0; i < 7; i++) {
    const data = new Date();
    data.setDate(hoje.getDate() + i);
    // Pula domingo (0) e segunda (1)
    if (data.getDay() === 0 || data.getDay() === 1) {
      hoje.setDate(hoje.getDate() + 1);
      i--;
      continue;
    }
    let dia = data.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    });
    dia = dia.charAt(0).toUpperCase() + dia.slice(1);

    dias.push({ label: dia, value: data.toISOString().split("T")[0] });
  }
  return dias;
};

const horarios = [
  "09:00", "09:30",
  "10:00", "10:30",
  "11:00", "11:30",
  "12:00", "12:30",
  "13:00", "13:30",
  "14:00", "14:30",
  "15:00", "15:30",
  "16:00", "16:30",
  "17:00", "17:30",
  "18:00", "18:30",
  "19:00", "19:30",
  "20:00",
];

const Agendamento = () => {
  const [diaSelecionado, setDiaSelecionado] = useState("");
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  const dias = gerarProximosSeteDias();

  const handleDiaClick = (value) => {
    setDiaSelecionado(value);
  };

  const handleHorarioClick = (horario) => {
    setHorarioSelecionado(horario);
  };

  return (
    <div className="agendamento-container">
      <h2>Agende seu horário</h2>

      {/* Seleção de Dia */}
      <div className="selecao-bloco">
        <label className="selecao-label">Selecione o dia:</label>
        <div className="selecao-cards">
          {dias.map((dia) => (
            <button
              key={dia.value}
              className={`selecao-card ${
                diaSelecionado === dia.value ? "selecionado" : ""
              }`}
              onClick={() => handleDiaClick(dia.value)}
            >
              {dia.label}
            </button>
          ))}
        </div>
      </div>

      {/* Seleção de Horário */}
      <div className="selecao-bloco">
        <label className="selecao-label">Selecione o horário:</label>
        <div className="selecao-cards">
          {horarios.map((horario) => (
            <button
              key={horario}
              className={`selecao-card ${
                horarioSelecionado === horario ? "selecionado" : ""
              }`}
              onClick={() => handleHorarioClick(horario)}
            >
              {horario}
            </button>
          ))}
        </div>
      </div>

      {/* Resultado */}
      {diaSelecionado && horarioSelecionado && (
        <div className="selecao-resultado">
          <p>
            Agendamento para o dia <strong>{diaSelecionado}</strong> às{" "}
            <strong>{horarioSelecionado}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Agendamento;
