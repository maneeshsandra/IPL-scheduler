import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Match(props) {
    const venues={
        "CSK":"CHEPAK",
        "RCB":"CHINNASWAMY",
        "RR":"SAVAI MANSINGH",
        "KXIP":" HPCA DHARMASHALA",
        "KKR":"EDEN GARDENS",
        "SRH":"LB STADIUM",
        "DC":"FEROZ SHAH KOTLA",
        "MI":"WANKHADE"
    }

    const [date,setDate]=useState(props.dates)
    
  return (
    <Table striped bordered hover style={{width:"60%",marginLeft:"20%"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Venue</th>
          <th>Match</th>
        </tr>
      </thead>
      <tbody>
        {props.matches.map((match,index)=>(
             <tr>
             <td>{index+1}</td>
             <td>{date[index]}</td>
             <td>{venues[match.split(" ")[0]]}</td>
             <td>{match}</td>
           </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Match;