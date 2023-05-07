import "./style.css";
import icon from "../../assets/Vector.svg";

function Component(props) {
  return (
    <div className="card">
      <div className="card__header">
        <span>{props.dataPost}</span>
        <img src={icon} alt="like" className="card__icon" id={props.idPost}/>
      </div>
      <div className="card__text">
        <h2>{props.titlePost}</h2>
        <p>{props.descPost}</p>
      </div>
    </div>
  );
}

export default Component;
