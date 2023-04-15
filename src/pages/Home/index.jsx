import '../style.css'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="container">
      <h1>Bem-vindo a página HOME</h1><br /><br />

      <h2>Produtos:</h2><br />
      <div className="produtos">
        <Link className="chip" to="/produto/1">Produto #1</Link>
        <Link className="chip" to="/produto/2">Produto #2</Link>
        <Link className="chip" to="/produto/3">Produto #3</Link>
        <Link className="chip" to="/produto/4">Produto #4</Link>
        <Link className="chip" to="/produto/5">Produto #5</Link>
        <Link className="chip" to="/produto/6">Produto #6</Link>
      </div>
    </div>
  );
}

export default Home;
