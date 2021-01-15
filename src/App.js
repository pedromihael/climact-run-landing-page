import GlobalStyle from './styles/global';
import { Container, Gradient, Content, ActionButton } from './styles';

import Video from './components/Video';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Video
        src="https://media.giphy.com/media/3o7WTDhRIJJHlGDYFq/giphy.mp4"
        alt="sorvete derretendo"
        type="video/mp4"
      />
      <Gradient />
      <Content>
        <h1>O clima do mundo está mudando.</h1>
        <span>
          Nós queremos mudar isso. E vamos, nós e você. Deixe seu carro fora
          disso.
        </span>
        <span className="black">
          E o melhor, quem sai ganhando é você. <br /> Sério.
        </span>
        <ActionButton>
          <a href="https://forms.gle/L9FjU1tB9pyTfGtt7" target="_blank">
            Quero saber mais
          </a>
        </ActionButton>
      </Content>
    </Container>
  );
}

export default App;
