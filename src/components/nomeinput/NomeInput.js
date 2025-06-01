import React, { useState } from "react";
import "./NomeInput.css";

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
