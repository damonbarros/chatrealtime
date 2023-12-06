import "./style.css";

export type PropsCardUser = {
  image: string,
  name: string,
  lastMessage: string
}

export default function CardUser({ image, name, lastMessage }: PropsCardUser) {
  return (
    <div className="conteinerCardUser">
        
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
