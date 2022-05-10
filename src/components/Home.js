import React from 'react'
import "./Home.css"
import img from "../images/home_img2.jpg"
import Product from './Product'
import img1 from "../images/product1.jpg"
import img2 from "../images/product2.jpg"
import img3 from "../images/product3.jpg"
import img4 from "../images/product4.jpg"
import img5 from "../images/product5.jpg"
import img6 from "../images/product6.jpg"

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" src={img} alt=" Buy Amazon Prime @129Rs/month"  />
        <div className="home__row">
        <Product title={`Mi Smart Band 5 - India's No. 1 Fitness Band, 1.1" (2.8 cm) AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women's Health Tracking (Black)`} 
        image={img3} price={"2,435"} rating={4}  />
          
          <Product title={"2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Space Grey (4th Generation)"} 
          image={img2} price={"61,900"} rating={5}/>
        </div>
        <div className="home__row">
        <Product title={"Harry Potter and the Cursed Child - Parts One and Two ( 1&2)"} image={img1} price={"465"} rating={4}/>
        <Product title={"Kadence Guitar Acoustica Series A05, Electric Acoustic Guitar, Zebra Wood with Pickup, Inbuilt tuner and Bag (Zebra Wood, Electro Acoustic)"}
         image={img4} price={"7,499"} rating={5}  />
        <Product title={"Gear Superior Backpack Orange-Black Backpack (BKPSPRIOR0601)"} image={img5} price={"369"} rating={3}  />
        </div>
        <div className="home__row">
        <Product title={"Blu-ray Home Theater Set HT-J5550WK | Access more apps in half the time | Experience the next level of Full HD 3D entertainment"} image={img6} price={"14,890"} rating={4}  />
        </div>
      </div>
    </div>
  )
}

export default Home