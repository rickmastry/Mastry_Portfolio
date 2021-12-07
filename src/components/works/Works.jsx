import { useState } from 'react';
import './works.scss'

export default function Works() {

  const [currentSlider, SetCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/JSBudget.png",
      title: "Web Apps",
      desc:"A lightweight compiled programming language with first-class functions. ",
      img:"assets/JSBudget.png", 
      name:"Budget App",
    },
    {
      id: "2",
      icon: "assets/recipe_search.png",
      title: "React Apps",
      desc:"React Recipe Apps to fit your needs.",
      img:"assets/recipe_search.png",
      name:"Recipe App",
    },
    {
      id: "3",
      icon: "assets/nollies.jpg",
      title: "WordPress",
      desc:"Wordpress websites built from scratch.",
      img:"assets/nollies.jpg",
      name:"Websites",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? SetCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2): SetCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
  };

  return (
    <div className="work" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map(d=>(

       
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>{d.name}</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
       
        </div>
         ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
    </div>
  )
}
