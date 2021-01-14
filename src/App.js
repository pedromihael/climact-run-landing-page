import GlobalStyle from './styles/global';
import { Container, Gradient, TextVideo } from './styles';

import Video from './components/Video';

function App() {
  return (
    <Container>
      <GlobalStyle />
      {/* <img src={gradient} alt="gradient" /> */}
      <Gradient />
      <TextVideo>
        <Video
          src="https://media.giphy.com/media/3o7WTDhRIJJHlGDYFq/giphy.mp4"
          alt="sorvete derretendo"
          type="video/mp4"
        />
        <h1>O clima do mundo está mudando.</h1>
      </TextVideo>
    </Container>
  );
}

export default App;
