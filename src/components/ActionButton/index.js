import { Container } from './styles';

export default function ActionButton({ link, children }) {
  return (
    <Container>
      <a href={link} target="__blank">
        {/* {String(children).toLocaleUpperCase} */}
        {children}
      </a>
    </Container>
  );
}
