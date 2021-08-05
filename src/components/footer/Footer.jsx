import React, {useState, useEffect} from 'react'
import './footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

  return (
    <div class="footer">
         <div className="item-container">
        <h1>Rick Mastry</h1>
       
      </div>
      <div className="item-container">
        
        <p>Copyright <span>{date.toLocaleDateString()}</span></p>
      </div>
      <div className="item-container">
        <FacebookIcon className="icon"/>
        <GitHubIcon className="icon"/>
      </div>
    </div>
  )
}
