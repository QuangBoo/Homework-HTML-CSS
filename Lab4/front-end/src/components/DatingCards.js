import React, { useEffect, useState } from 'react'

function DatingCards() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/dating/cards')
      setPeople(req.data)
    }
    fetchData()
  }, [])
  return (
    <div className='datingCards'>
      <div className='datingCards__container'>
        {people.map((person) => (
          <DatingCards
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outFrame(person.name)}
          >
            <div style={{backgroundImage: `url(${person.imgUrl})`}}>
              <h3>{person.name}</h3>
            </div>
          </DatingCards>
        ))}
      </div>
    </div>
  )
}

export default DatingCards