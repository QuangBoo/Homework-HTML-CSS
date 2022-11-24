import React from 'react'

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons_repeat'>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_left'>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_right'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_lighting'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons