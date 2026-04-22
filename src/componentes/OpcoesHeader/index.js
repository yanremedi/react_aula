const texto0pcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {texto0pcoes.map((texto) => (
                    <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;