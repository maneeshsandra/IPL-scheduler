import Table from 'react-bootstrap/Table';
import Match from './match';

function Schedule(props) {
  var matches=[]
    const round=(lst)=>{
        var a=String(lst.splice(1,1))
        lst.push(a)
        return lst  
    }
      
    var date=new Date();
    var datesArray=[]
    const match=(lst)=>{
        var teams=lst.length
        var j=teams-1
        for(let i=0;i<teams+1;i++){
            if(j>i){
                
                datesArray.push(date.toDateString())
                matches.push(lst[i] +" vs "+lst[j])
                date.setDate(date.getDate() + 1);
                j-=1
            }
           
        }
          
    }
    
   
    var lst=props.teams
    var length=lst.length
    
        
        match(lst)
            for(let r=0;r<length-2;r++){
                    round(lst)
                    match(lst)
                }

return <Match matches={matches} dates={datesArray}/>
        
}
export default Schedule;