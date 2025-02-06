import React from 'react'
import TopDetailPage from './TopDetailPage'
import BottomDetailPage from './BottomDetailPage'

function DetailPage() {
  return (
    <div>
        <div
    className='flex flex-col gap-16'
    >
      <TopDetailPage/>
      <BottomDetailPage/>
    </div>
    </div>
  )
}

export default DetailPage
