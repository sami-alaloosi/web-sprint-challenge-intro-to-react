import React from 'react'
import styled, { keyframes } from 'styled-components';

const kf = keyframes`

50% {
  transform: scale(.5);
  opacity: 50%;
}
100% {
  transform: scale(1);
  opacity: 100%;
}
`
const AnimationDiv = styled.div`
transform: scale(0);
opacity: 0;
animation: ${kf} 1.5s ease-in-out forwards;

`
 

function Character ({data}) {

    return (
      <AnimationDiv>
      <div  className="ui link cards" >
      <div className="card" style ={{height: "33rem"}} >
        <div className="image">
          <img src={data.image} alt ={data.id}/>
        </div>
        <div className="content">
          <div className="header">{data.name}</div>
          <div className="meta">
            <a> <span>status: </span>{data.status}</a>
          </div>
          <div className="description">
            {`${data.name} is a ${data.species} who has apeared in ${data.episode.length > 1 ? data.episode.length + ' episodes': data.episode.length + ' episode'}`}
             
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
          {data.location.name.split(' ')[0]}
          </span>
          <span >
            <i className="user icon" ></i> 
            Species: {data.gender }, {data.species}
          </span>
        </div>
      </div>
    </div>
    
    </AnimationDiv>
    
    )
}


export default Character;
