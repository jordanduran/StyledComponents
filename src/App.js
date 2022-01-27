import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const BasicButton = styled.button`
  background-color: slateblue;
  color: white;
  border-style: none;
  padding: 5px 30px;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  display: block;
  margin: 2em auto;
`;

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>styled component</BasicTitle>
      <BasicButton>click me</BasicButton>
    </div>
  );
}

export default App;
