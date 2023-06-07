import { useState, useEffect } from "react";
import { Container } from "./style";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <span>{time.toLocaleTimeString()}</span>
    </Container>
  );
};

export default Clock;
