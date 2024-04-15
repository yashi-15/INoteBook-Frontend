import React, { useContext,  useEffect } from 'react';
import NoteContext from '../context/notes/noteContext';

const About = () => {
  const a =  useContext(NoteContext);
  useEffect(()=>{
    a.update()
  }, [])
  return(
    <div>
      <h5>This is about: name is {a.state.name} and {a.state.class}</h5>
    </div>
  )
}

export default About;
