import React from "react";

const ButtonLimpar = ({ atualizarDados }) => {
  return (
    <button className="btn-azul" type="button" onClick={atualizarDados}>
      atualizar animais
    </button>
  );
};

export default Button;