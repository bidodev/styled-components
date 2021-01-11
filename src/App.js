import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;

`

const Title = styled.h1`
color: red;
font-size: 1rem;

`


function App() {
  return (
    <Container>
    <Title>
      Hello Darkness
    </Title>
    </Container>
  );
}

export default App;
