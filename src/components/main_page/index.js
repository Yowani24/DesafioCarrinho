import React from 'react'
import styled from 'styled-components'
import Product from '../Product';
import Dados from '../ProductData.json'

export default function Main(props) {
    const {Adicionar } = props;
    const Lista_de_dados = Dados;
    return (
        <Main_sec>
            <h1>Adicione itens ao carrinho</h1>
            <div className="main_wrapper">
                {Lista_de_dados.items.map((produto) => (
                    <Product Adicionar={Adicionar} key={produto.id} produto={produto}/>
                ))}
            </div>
        </Main_sec>
    )
}

const Main_sec = styled.div`
    
    width: 62.5rem;
    border-radius: 5px;
    /* background:#F4F4F4F4; */

    h1{
        text-align: center;
    }

    .main_wrapper{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`