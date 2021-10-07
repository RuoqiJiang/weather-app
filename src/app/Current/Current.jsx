import React from 'react';
import styled from 'styled-components';
import Temperature from '../../components/Temperature';
import background from './assets/CurrentBackground.jpeg';
import SubText from './components/SubText';
import Metas from './components/Metas';


const Container = styled.div`
      padding: 60px 80px;
      background-image: url(${background});
      background-position: center; 
      background-repeat: no-repeat;
      background-size: cover;
      color: white;  
      display: flex;
      position: relative; 
      
`;

const CurrentTemperature = styled.div `
     font-size: 5rem;
`;

const Weather = styled.div`
    font-size: 1.5 rem;
    text-align: center;

`;
const CityName = styled.div`
    flex: 1;
    font-size: 2rem; 
    text-align: right;
    margin-top: 16px;
`;

const Strip = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.3;
    height: 24px;
    
`;

const Current = () => (
    <Container> 
        <div>
        <CurrentTemperature>
        <Temperature>
            15.71
        </Temperature>
        </CurrentTemperature>
        <Weather>
            <SubText>
                Clouds
            </SubText>   
        </Weather>
        <Metas />
        </div>
       <CityName>
            Melburne
        </CityName>
        <Strip />
    </Container>
);

export default Current;