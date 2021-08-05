import './testimonials.scss'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Don Fillipone",
      title: "Owner-Don the Mon's",
      img:"assets/don.jpg",
      icon: "assets/twitter.png",
      desc:"Built my website exactly how I wanted. I told Rick what I needed and gave him some images and whalah!",
    },
    {
      id: 2,
      name: "Gayle Mitchell",
      title: "Owner-Design Concepts",
      img:"assets/mimi.jpg",
      icon: "assets/youtube.png",
      desc:"Meticulous worker who always makes the deadline",
      featured: true,
    },
    {
      id: 3,
      name: "Melissa Basehoar",
      title: "Owner-Atta Business Center",
      img:"assets/melissab.jpg",
      icon: "assets/linkedin.png",
      desc:"Love our website! Rick Mastry finished everything to the last detail!",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
       <h1>Testimonials</h1>
       <div className="container">
         {data.map(d=>(
              <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img src={d.img} className="user"alt="" />
                <img src={d.icon} className="right" alt="" />
              </div>
              <div className="center">
                 {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>

         ))}
        
       </div>
    </div>
  )
}
