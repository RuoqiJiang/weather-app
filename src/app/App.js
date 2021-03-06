import React from 'react';
import styled from 'styled-components';
import Current from './Current';
import background from './assets/pink_cloud.jpg';

const Container = styled.div`  
      height: 100vh;
      withd: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${background});
      background-repeat: no-repeat;
      background-size: cover;
      
`;

const Panel = styled.div`
    overflow: auto;
    background-color:white;
    width: 800px;
    border-radius: 32px;
    box-shadow: 0 0 16px rgb(0 0 0 / 50%);

    `;

const Bottom = styled.div`
      display: flex;
      padding: 40px 90px;

`;

const Divider = styled.div `
      margin:0 32px;
      border-left:3px solid rgba(0,0,0,0.1);
      opacity: 0.6;   
`;


function App() {
  return (
    <Container>
      <Panel>
        <Current />
        <Bottom>
          <div>
            Other Cities
          </div>
          <Divider />
          <div>
            Forecast
          </div>
        </Bottom>
      </Panel>
    </Container>
  );
}

export default App;
