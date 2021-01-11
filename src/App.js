import styled from "styled-components";

import Button from './components/Button'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #606060;
`;

function App() {
  return (
    <Section>
      <Button primary>
        First Button
      </Button>
      <Button>
        Second Button
      </Button>
    </Section>
  );
}

export default App;
