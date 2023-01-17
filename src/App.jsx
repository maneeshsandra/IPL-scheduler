import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button';
import './App.css'
import Schedule from './components/table';
import Match from './components/match';

function App() {
  const [teams,setTeams]=useState(["CSK","RCB","MI","RR","SRH","DC","KXIP","KKR"])
  const [inputValue,setInputValue]=useState("")
  const [errorMsg,setErrorMsg]=useState("")
  const [showSchedule,setShowSchedule]=useState(false)

  const keyClicked=(event)=>{
    if (event.code==="Enter"){
      setTeams([...teams,inputValue])
      setInputValue("")
      
    }
    else
    setInputValue(event.target.value)
  }

  const removeTeam=(team)=>{
     setTeams(teams.filter(temp=>{
      return team !==temp
    }))
  }


  const printSchedule=()=>{
    if(!showSchedule && errorMsg==="")
    setShowSchedule(true)
  }

  useEffect(() => {
    if(teams.length%2!==0 || teams.length<4){
      setShowSchedule(false) 
      prepareSchedule()
    }

    else{

      setShowSchedule(true)
      prepareSchedule()
    }
  }, [teams])
  
 

const prepareSchedule=()=>{
  if (teams.length<4)
  setErrorMsg("Minimum 4 team names are required")
  else if(teams.length%2!==0)
  setErrorMsg("Teams should be multiples of 2...please add or remove one team")
  else{
    setErrorMsg("")
   printSchedule()
  }
    
}
 

  return (
    <>
    <div className='searchBar noprint'>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Add Team</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Add name and press enter'
          onChange={keyClicked}
          onKeyDown={keyClicked}
          value={inputValue}
        />
        <Button onClick={ prepareSchedule}>Submit</Button>
        
      </InputGroup>
      {teams.map(team=>(
        <>
        <span key={team} className='capsule noprint'>{team}
         <CloseButton className='remove' onClick={()=>removeTeam(team)}/>
         </span>
        </>
      ))}
      <h3 className='error'>{errorMsg}</h3>
      </div>
        {showSchedule && <Schedule teams={teams}/>}
        {showSchedule && <Button className='print' onClick={()=>window.print()}>Print PDF</Button>}

    </>
  );
}

export default App;
