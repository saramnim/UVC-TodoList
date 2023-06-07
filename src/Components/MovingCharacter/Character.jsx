import React from "react";
import { Container, Eyes, Eye, Ball } from "./style";

const ECharacter = () => {
  return (
    <Container>
      <Eyes>
        <Eye>
          <Ball />
        </Eye>
        <Eye>
          <Ball />
        </Eye>
      </Eyes>
    </Container>
  );
};

export default ECharacter;
