import React, { useState } from "react";
import "./TelefoneInput.css";

const TelefoneInput = () => {
  const [telefone, setTelefone] = useState("");
  const [erro, setErro] = useState("");

  // Função para aplicar máscara enquanto digita
  const formatarTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "");

    if (apenasNumeros.length <= 10) {
      return apenasNumeros.replace(
        /(\d{2})(\d{4})(\d{0,4})/,
        "($1) $2-$3"
      );
    } else {
      return apenasNumeros.replace(
        /(\d{2})(\d{5})(\d{0,4})/,
        "($1) $2-$3"
      );
    }
  };

  const validarTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "");
    return apenasNumeros.length === 10 || apenasNumeros.length === 11;
  };

  const handleChange = (e) => {
    const valor = e.target.value;
    const telefoneFormatado = formatarTelefone(valor);
    setTelefone(telefoneFormatado);

    if (telefoneFormatado === "") {
      setErro("");
    } else if (!validarTelefone(telefoneFormatado)) {
      setErro("Número inválido");
    } else {
      setErro("");
    }
  };

  return (
    <div className="telefone-container">
      <label htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        value={telefone}
        onChange={handleChange}
        placeholder="(XX) XXXXX-XXXX"
        maxLength={15}
        required
      />
      {erro && <span className="telefone-erro">{erro}</span>}
    </div>
  );
};

export default TelefoneInput;
