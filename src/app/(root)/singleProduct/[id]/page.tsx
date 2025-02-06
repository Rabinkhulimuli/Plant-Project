import CaresolPlant from '@/components/CaresolPlant'
import LastPlant from '@/components/LastPlant'
import DetailPage from '@/components/singlePage/DetailPage'
import ImageCard from '@/components/singlePage/ImageCard'
import React from 'react'

function page() {
  return (
    <div
    className='pt-32 px-2 md:px-12 xl:px-48 '
    >
      <div
      className='flex gap-20'
      >
        <ImageCard/>
      <DetailPage/>
      </div>
      
      <CaresolPlant 
      title={"View Similar Products"}
      />
      <LastPlant/>
    </div>
  )
}

export default page
