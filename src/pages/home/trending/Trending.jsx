import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../components/hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'



const Trending = () => {

  const onTabChange = (tab) =>{
    setEndPoint(tab==="Day"?'day':'week')
  }
  
  const[endpoint , setEndPoint] = useState("day");

  const{ data , loading } = useFetch(`/trending/all/${endpoint}`) 

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTab data={['Day' ,'Week']} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
