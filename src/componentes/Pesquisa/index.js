import Input from "../Input";
import styled from 'styled-components';
import {useState} from 'react';
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-color: liner-ar-gradient(90deg, #002f52 35%, #326589);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados] = useState('')
    return(
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input placeholder="Escreva sua proxima leitura"
                    onBlur={evento=> {
                        const textoDigitado = evento.target.value;
                        const resultadoPesquisa = livros.filter()
                    }}
            />
        </PesquisaContainer>
    )
}

export default Pesquisa;