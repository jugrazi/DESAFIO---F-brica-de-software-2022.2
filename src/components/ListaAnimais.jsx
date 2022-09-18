import Monstro from "./animais";

const ListaMonstros = (props) => {
  const dados = props.dados;

  return (
    <>
      {dados.map((objeto) => {
        return <animal key={objeto.id} monstroUnico={objeto} />;
      })}
    </>
  );
};

export default ListaAnimaiss;