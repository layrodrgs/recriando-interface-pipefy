import React from 'react';

 import { Container, Label } from './style';

function Card() {
  return (
    <Container>
      <header>
        <Label color ="#7159c1" />
      </header>
      <p>Fazer a migração completa do servidor</p>
      <img src="https://api.adorable.io/avatars/258/abott@adorable.png" alt="" />
    </Container>
  );
}

export default Card;