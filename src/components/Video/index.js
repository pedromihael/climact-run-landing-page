import React, { useEffect } from 'react';

import { Container } from './styles';

function Video({ src }) {
  useEffect(() => {
    const video = document.getElementById('melting-ice-cream');
    video.play();
  }, []);

  return (
    <Container id="melting-ice-cream" muted>
      <source src={src} alt="sorvete derretendo" type="video/mp4" />
    </Container>
  );
}

export default Video;
