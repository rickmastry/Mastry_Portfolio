import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import {
  featuredPortfolio,
  reactPortfolio,
  wordpressPortfolio,
  javascriptPortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react",
      title: "React Apps",
    },
    {
      id: "wordpress",
      title: "WordPress",
    },
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "web",
      title: "Web Apps",
    },
  ];

  useEffect(()=>{
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "wordpress":
        setData(wordpressPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected])
  return (
    <div className="portfolio" id="portfolio">
       <h1>Portfolio</h1>
       <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
       </ul>
       <div className="container">
         {data.map((d)=>(
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <a href={d.link} target="blank">Link to Work</a>
          </div>
         ))}
        
         
       </div>
     
    </div>
  )
}
