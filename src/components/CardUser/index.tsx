import "./style.css";

export default function CardUser({ image }: { image: string }) {
  return (
    <div className="conteinerCardUser">
        
      <div className="boxUserCard">
        <img src={image} />
      </div>

      <div className="contentCardUser">
        <strong>Neymar</strong>
        <small>Vc é lindo</small>
      </div>
    </div>
  );
}
