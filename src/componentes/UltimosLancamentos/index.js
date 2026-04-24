import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9b00;
    font-size: 36px;
    text-align: center;
    margin:0;
`

const NovosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(
            <UltimosLancamentosContainer>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            {livros.map(livro => (
                <NovosLivros>
                    <img src={livro.src} alt={livro.alt}/>
                </NovosLivros>
            ))}
            </UltimosLancamentosContainer>
            
    )
}

export default UltimosLancamentos;