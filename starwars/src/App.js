import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from "./components/Character"
import styled from 'styled-components';



const GridDiv = styled.div`
 display: grid;
 grid-gap: 2%;
 margin: 2%;
 grid-template-columns: repeat(5, 1fr)  ;
 ` 
const CenterDiv = styled.div`

display:flex;
justify-content: center;
margin-top: 3rem;

`

const DiveSize = styled.div`
width: 90rem;

`
const App = () => {
  
  const [charactersData, setCharactersData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(()=>{
  
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => setCharactersData(res.data.results))
    .catch(()=> console.log('there was an error'))
  }, [pageNumber] )

  
  
  

  return (
    <div>
    <CenterDiv>
    <DiveSize>
      <div className="ui two bottom attached buttons">
        <div className="ui button" onClick ={()=> pageNumber > 1 ? setPageNumber(pageNumber -1): null} >Previous</div>

        <div className="ui button" onClick ={()=> pageNumber < 30 ? setPageNumber(pageNumber +1): null}>Next</div>
      </div>
      </DiveSize>
    </CenterDiv>

    <div style={{textAlign: "center"}}>
      <GridDiv>
      {charactersData.map(data => <Character  key ={data.id} data ={data} />)}
      </GridDiv>
    </div>
    

    </div>
    
  );
}

export default App;
