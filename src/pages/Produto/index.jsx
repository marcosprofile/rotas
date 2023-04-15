import '../style.css'
import { useParams, Link } from 'react-router-dom'

function Produto() {
  const { id } = useParams();

  return (
    <div className="container">
      <Link className="chip" to="/">Voltar</Link>
      <h2 className="spacingTop">Detalhe do produto {id}</h2><br />
      <span>Meu produto</span>
    </div>
  )
}

export default Produto;