function Card(props) {

  return (
    <div className="Card" onClick={props.clickCard}>
      {props.link}
    </div>

  );

}

export default Card;

