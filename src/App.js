import Carrinho from "./components/carrinho";
import Header from "./components/header";
import Main from "./components/main_page";
import './GlobalStyles.css'
import { useState } from "react";

function App() {
  const [itens_no_carrinho, setItens_no_carrinho] = useState([]);
  const Adicionar = (produto) => {
    const disponivel_no_carrinho = itens_no_carrinho.find(item => item.id === produto.id);
    if(disponivel_no_carrinho) {
      setItens_no_carrinho(itens_no_carrinho.map(item => item.id === produto.id ? {...disponivel_no_carrinho, quantidade: disponivel_no_carrinho.quantidade + 1 } : item));
    } else {
      setItens_no_carrinho([...itens_no_carrinho, {...produto, quantidade: 1 }])
    }
  }
  const Remover = (produto) => {
    const disponivel_no_carrinho = itens_no_carrinho.find((item) => item.id === produto.id);
    if (disponivel_no_carrinho.quantidade === 1) {
      setItens_no_carrinho(itens_no_carrinho.filter((item) => item.id !== produto.id));
    }else{
      setItens_no_carrinho(itens_no_carrinho.map(item => item.id === produto.id ? {...disponivel_no_carrinho, quantidade: disponivel_no_carrinho.quantidade - 1 } : item));
    }
  }
  return (
    <div>
    <Header counterCarrinho = {itens_no_carrinho.length}/>
     <div className="wrapper">
       <Main Adicionar={Adicionar}/>
       <Carrinho Adicionar={Adicionar} Remover={Remover} itens_no_carrinho = {itens_no_carrinho}/>
     </div>
    </div>
  );
}

export default App;
