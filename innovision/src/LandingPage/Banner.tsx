import './home.css'; 
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner'>
      <img className='imgBanner' src="/imagens/carro2.jpg" alt="Carro" /> 
      <div className='contentBanner'>
        <h1>A <b>revolução</b> começa <br></br> aqui.</h1>
        <p>Potencialize sua jornada automotiva; <br></br>Explore nossos serviços e tenha reparos eficientes!</p><br></br>
        <Link to="/services">
        <button id="btnBanner">Ver serviços <i className="fa-solid fa-arrow-right-long" id="iconBanner"></i></button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
