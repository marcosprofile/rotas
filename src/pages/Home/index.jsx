import '../style.css'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="container">

      <div className="alignDiv">
        <h2 className="alignText">Bem-vindo a página HOME</h2>
        <p className="alignText">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </p>
        <div className="title alignText marginTop">Produtos</div>
        <div className="produtos">
          <Link className="chip" to="/produto/1">Produto #1</Link>
          <Link className="chip" to="/produto/2">Produto #2</Link>
          <Link className="chip" to="/produto/3">Produto #3</Link>
          <Link className="chip" to="/produto/4">Produto #4</Link>
          <Link className="chip" to="/produto/5">Produto #5</Link>
          <Link className="chip" to="/produto/6">Produto #6</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
