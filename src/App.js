import BasicTitle from './components/BasicTitle';
import { DefaultButton, TransparentButton } from './components/Buttons';

// import styled from 'styled-components';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle specialColor>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <TransparentButton>click me</TransparentButton>
    </div>
  );
}

export default App;
