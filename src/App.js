import GlobalStyle from './styles/global';

import ActionButton from './components/ActionButton';

import logo from './assets/run-logo.jpeg';
import hero1 from './assets/hero-1-cut.jpg';

import { Container, Logo, Content, Text } from './styles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Content>
        <Text>
          <h1>O CLIMA DO MUNDO ESTÁ MUNDANDO</h1>
          <span>
            E nós queremos mudar isso. E vamos. Nós e você. Deixe seu carro de
            fora dessa.
          </span>
          <span>
            E o melhor, quem sai ganhando é você. <br />
            Sério.
          </span>
          <ActionButton>QUERO SABER MAIS</ActionButton>
        </Text>
        <img src={hero1} alt="logo" />
      </Content>
    </Container>
  );
}

export default App;
