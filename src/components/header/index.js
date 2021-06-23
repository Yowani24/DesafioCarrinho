import React from 'react'
import styled from 'styled-components'
import { IoCartSharp } from 'react-icons/io5'

export default function Header(props) {
    const { counterCarrinho } = props;
    return (
        <Header_sec>
            <div className="container">
            <h1>Bem-vindos ao Carrinho de Compras</h1>

            <div className="carrinho_box">
                <IoCartSharp className="cart-icon"/>
                {counterCarrinho ? (
                    <button>{counterCarrinho}</button>
                ) : ('')}
            </div>

            </div>

        </Header_sec>
    )
}

const Header_sec = styled.div`
    height: 150px;
    background: #23b9ce;

    display: flex;
    align-items: center;

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;

        h1{
            color: #FFFFFF;
        }
        
        .cart-icon{
            font-size: 30px;
            color: gold;
        }

        .carrinho_box{
            display: flex;
            justify-content: center;
            align-items: center;

            button{
                border: none;
                border-radius: 5px;
                color: orange;
                font-weight: bold;
            }
        }
    }


`