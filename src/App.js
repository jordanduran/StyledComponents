import BasicTitle from './components/BasicTitle';
import { DefaultButton } from './components/Buttons';

// import styled from 'styled-components';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle specialColor>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
