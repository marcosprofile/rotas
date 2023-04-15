import { Link } from 'react-router-dom'
import '../style.css'

function Erro() {
  return (
    <div className="container">
      <h2 className="alignText">Ops... parece que essa página não existe.</h2><br /><br />
      <span>Encontramos essas páginas aqui:</span><br /><br />
      <Link to="/">Home</Link><br />
      <Link to="/sobre">Sobre</Link><br />
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Erro;