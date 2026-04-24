import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.div`
    margin-right: 10px;
`

function Logo(){
    return(
        <LogoContainer>
          <img src={logo} alt='logo'></img>
          <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo;