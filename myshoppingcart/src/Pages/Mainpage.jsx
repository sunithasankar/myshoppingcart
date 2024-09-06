import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collection from '../Components/Collection'
import Footer from '../Components/Footer'
import {Men,Women} from '../data';
import WomenCollection from '../Components/WomenCollection'

function Mainpage() {
    const [menFashion, setMenFashion] = useState(Men)
    const [womenFashion, setWomenFashion] = useState(Women)
  console.log(Men)
  return (
    <div>
    <Header/>
    <Banner/>
    <Collection menFashion={menFashion}/>
    <WomenCollection womenFashion={womenFashion}/>
    <Footer/>      
    </div>
  )
}

export default Mainpage
