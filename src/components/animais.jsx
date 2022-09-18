const Animais = (props) => {
    const { id, name, email } = props.monstroUnico;
  
    return (
      <article key={id} className="animais">
        <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{}</p>
        </div>
      </article>
    );
  };
  
  export default Animais;