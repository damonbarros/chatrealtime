import "./style.css";

export type PropsCardUser = {
  image: string,
  name: string,
  lastMessage: string
  onClick: any
}

export default function CardUser({ image, name, lastMessage, onClick }: PropsCardUser) {
  return (
    <div className="conteinerCardUser" onClick={onClick}>
        
      <div className="boxUserCard">
        <img src={image} />
      </div>

      <div className="contentCardUser">
        <strong>{name}</strong>
        <small>{lastMessage}</small>
      </div>
    </div>
  );
}
