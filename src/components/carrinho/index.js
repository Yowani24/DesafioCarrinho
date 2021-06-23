import React from 'react'
import styled from 'styled-components'

export default function Carrinho(props) {
    const { itens_no_carrinho, Adicionar, Remover } = props;
    const preco_do_item = itens_no_carrinho.reduce((a, c) => a + c.price * c.quantidade, 0);
    const frete = preco_do_item > 10 ? 0 : 50;
    const preco_total = preco_do_item + frete;
    return (
        <Carrinho_sec>
            <h1>Meu carrinho</h1>
            {itens_no_carrinho.length === 0 && <div className="carrinho_vazio_texto">Seu carrinho está vazio</div>}
            
            {itens_no_carrinho.map((artigo) => (
                <div key={artigo.id} className="lista_dos_artigos">

                    <div><img src={artigo.imageUrl} alt=""/></div>

                    <div className="detalhes-de-preco">
                        <div>{artigo.name}</div>
                        <div className="detalhes-de-preco-bottom">
                            <div>${artigo.price}</div>
                            <div>
                            <button className="btn adicionar_artigo" onClick={() => Adicionar(artigo)}>+</button>
                            <button className="btn remover_artigo" onClick={() => Remover(artigo)}>-</button>
                            </div>
                            {artigo.quantidade} X ${artigo.price.toFixed(2)}
                        </div>
                    </div>

                </div>


            ))}
            
            {itens_no_carrinho.length !== 0 && (
                <>
                    <div className="tabela_de_precos">
                        <div>Preço do produto:</div>
                        <span>${preco_do_item.toFixed(2)}</span>
                    </div>
                    <div className="tabela_de_precos">
                        <div>Frete:</div>
                        <span>${frete.toFixed(2)}</span>
                    </div>
                    <div className="tabela_de_precos">
                        <div><strong>Total:</strong></div>
                        <span>${preco_total.toFixed(2)}</span>
                    </div>

                    <div className="fechamento_decompra_container">
                        <div className="mensagem">
                            <h2>{preco_do_item > 10 ? 'Parabéns, sua compra tem frete grátis !' : ''}</h2>
                        </div>

                        <div className="btn_container">
                            <button className="btn_finalizar_compra">Finalizar compra</button>
                        </div>
                    </div>
                </>
            )}
            

        </Carrinho_sec>
    )
}

const Carrinho_sec = styled.div`
    width: 30.5rem;
    border-radius: 5px;
    background: #F4F4F4F4;

    .carrinho_vazio_texto{
        text-align: center;
        margin-top: 50px;
    }
    
    h1{
        text-align: center;
        border-bottom: 1px solid darkgray;
        margin-bottom: 15px;
    }

    .lista_dos_artigos{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 5px auto;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        background: #FFFFFF;

        img{
            width: 160px;
            max-height: 170px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        }
        .detalhes-de-preco{
            width: 100%;
            padding: 5px;
        }
        .detalhes-de-preco-bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .btn{
                width: 30px;
                height: 30px;
                border: none;
                font-size: 16px;

                &:active{
                    background: lightgray;
                }
            }
            .remover_artigo{
                margin-left: 5px;
            }
        }
    }

    .tabela_de_precos{
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }

    .fechamento_decompra_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        .mensagem{
            background: #99e7a7;
            border-radius: 50px;
            padding: 8px 20px;

            h2{
                font-size: 16px;
                color: #007615;
            }
        }

        .btn_container{
            width: 100%;
            margin-top: 30px;
            border-top: 1px solid darkgray;
            padding: 30px 0;

            display: flex;
            justify-content: center;

            .btn_finalizar_compra{
                width: 450px;
                height: 50px;
                border-radius: 10px;
                background: #23b9ce;
                border: none;
                font-size: 25px;
                font-weight: bold;
                color: #FFFFFF;
                cursor: pointer;
                transition: .1s ease-in-out;

                &:active{
                    background:#4ec7d7;
                }
            }
        }
        
    }

`