import React from 'react'
import styled from 'styled-components';
import { IoCartSharp } from 'react-icons/io5'

export default function Product(props) {
    const { produto, Adicionar } = props;
    return (
        <Product_sec>
            <img className="image" src={produto.imageUrl} alt={produto.name}/>
            <div className="detalhes-do-produto">
                <h3>{produto.name}</h3>
                <div className="preco-e-carrinho">
                    <h4>${produto.price}</h4>
                    <IoCartSharp onClick={() => Adicionar(produto)} className="cart-icon"/>
                </div>
            </div>
        </Product_sec>
    )
}

const Product_sec = styled.div`
    width: 200px;
    margin: 10px 2px;
    padding: 5px 20px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
    transition: .3s;

    &:hover{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
        rgba(17, 17, 26, 0.1) 0px 8px 24px,
        rgba(17, 17, 26, 0.1) 0px 16px 48px;
    }

    .image{
        /* width: 100%; */
        max-height: 250px;
        cursor: pointer;
    }

    .detalhes-do-produto{
        display: flex;
        flex-direction: column;
        
        h3{
        color: #23b9ce;
        font-size: 16px;
        }
        h4{
            color:#2c2d2e;
            font-size: 1rem;
        }

        .preco-e-carrinho{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            .cart-icon{
                font-size: 20px;
                background: #23b9ce;
                border-radius: 2px;
                padding: 5px;
                color: #FFFFFF;
                cursor: pointer;
                transition: .2s ease-in-out;

                &:hover{
                    background: gold;
                    color:#000000;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                }
            }
        }

        

    }
    
`