import GlobalStyle from './styles/global';

import ActionButton from './components/ActionButton';
import AboutUs from './components/AboutUs';

import logo from './assets/transparent-logo.png';
import hero1 from './assets/hero-1-cut.jpg';
import hero2 from './assets/hero-3.jpg';

import {
  Container,
  Logo,
  MainContent,
  SecondContent,
  MainText,
  SecondText,
  CallToActionFooter,
} from './styles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <MainContent>
        <MainText>
          <h1>O CLIMA DO MUNDO ESTÁ MUDANDO</h1>
          <span>
            E nós queremos mudar isso. E vamos. Nós e você. Deixe seu carro de
            fora dessa.
          </span>
          <span>
            E o melhor, quem sai ganhando é você. <br />
            Sério.
          </span>
          <ActionButton
            link={`https://docs.google.com/forms/d/1k4QtmTLs_cTLZA_o7DJvDsKF14pqTu6F2DAaVpChZjE/edit?ts=6009b78f&gxids=7628`}
          >
            QUERO SABER MAIS
          </ActionButton>
        </MainText>
        <img src={hero1} alt="logo" />
      </MainContent>
      <SecondContent>
        <img src={hero2} alt="logo" />
        <SecondText>
          <span>
            A ClimAct Run quer resolver um problema: a imensa massa de CO2 na
            atmosfera, que nosso estilo de vida moderno causa.
          </span>
          <span>
            Imagine, por exemplo, que de casa até o trabalho, você roda 11Km.
            Por dia, então, são 22Km. Num mês, são 440Km rodados. Pra você pode
            parecer pouco, mas para o planeta, são 56 TONELADAS de CO2 que VOCÊ
            joga na atmosfera.
          </span>
          <span>
            Através de um app com desafios que geram pontos que podem ser
            acumulados e trocados por benefícios em estabelecimentos parceiros.
          </span>
          <span>
            Dentro dele, será possível compartilhar conquistas e trazer aquela
            pessoa que sabe que pode começar a ajudar o meio ambiente de maneira
            divertida.
          </span>
        </SecondText>
      </SecondContent>
      <AboutUs />
      <CallToActionFooter>
        <ActionButton
          link={`https://docs.google.com/forms/d/1k4QtmTLs_cTLZA_o7DJvDsKF14pqTu6F2DAaVpChZjE/edit?ts=6009b78f&gxids=7628`}
        >
          QUERO SABER MAIS
        </ActionButton>
      </CallToActionFooter>
    </Container>
  );
}

export default App;
