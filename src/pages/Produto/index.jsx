import '../style.css'
import { useParams, Link } from 'react-router-dom'

function Produto() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="alignDiv">
        <Link className="chip" to="/">Voltar</Link>
        <h2 className="spacingTop">Detalhe do produto {id}</h2>
        <span>Meu produto</span>
      </div>
    </div>
  )
}

export default Produto;