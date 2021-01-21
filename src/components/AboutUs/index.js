import { useMemo } from 'react';
import { Container, Item, People } from './styles';

import bruna from '../../assets/bruna.jpeg';
import lilian from '../../assets/lilian.jpeg';
import maira from '../../assets/maira.jpeg';
import marcos from '../../assets/marcos.jpeg';
import matheus from '../../assets/matheus.jpeg';
import pedro from '../../assets/pedro.jpeg';

export default function AboutUs() {
  const people = useMemo(() => {
    return [
      {
        name: 'Bruna',
        linkedin: 'https://www.linkedin.com/in/machadobruna/',
        picture: bruna,
      },
      {
        name: 'Lilian',
        linkedin: 'https://www.linkedin.com/in/eng-civil-lilian-ferreira-/',
        picture: lilian,
      },
      {
        name: 'Maira',
        linkedin: 'https://www.linkedin.com/in/maira-gazzi-manfro-a1a7b4192/',
        picture: maira,
      },
      {
        name: 'Marcos',
        linkedin: 'https://www.linkedin.com/in/marcosbrs/',
        picture: marcos,
      },
      {
        name: 'Matheus',
        linkedin: 'https://www.linkedin.com/in/matheus-f-i-falasco-ab9850141/',
        picture: matheus,
      },
      {
        name: 'Pedro',
        linkedin: 'https://linkedin.com/in/opedropaes',
        picture: pedro,
      },
    ];
  }, []);
  return (
    <Container>
      <h3>QUEM TOCA ESSA IDEIA</h3>
      <People>
        {people.map(person => (
          <Item key={person.name}>
            <img src={person.picture} alt="person" />
            <span>
              <a href={person.linkedin} target="__blank">
                Conheça {person.name} no Linkedin
              </a>
            </span>
          </Item>
        ))}
      </People>
    </Container>
  );
}
