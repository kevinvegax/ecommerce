import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import PopularProducts from '../../components/PopularProducts/PopularProducts'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      <PopularProducts />
      <FeaturedProducts />
    </div>
  )
}

export default Home