import React from 'react'

function Collection(props) {
  const{title,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,
    price1,price2,price3,price4,price5,price6,price7,price8,price9,price10  }=props.menFashion
  return (
    <div className='colletion-section'>
     <h2>{title}</h2>
     <div className='menImages'>
      <div>
      <img src={image1} alt="MenPic"/>
      <h3>Price:{price1}</h3>
      </div>
      <div>
      <img src={image2} alt="MenPic"/>
      <h3>Price:{price2}</h3>
      </div>
      <div>
      <img src={image3} alt="MenPic"/>
      <h3>Price:{price3}</h3>
      </div>
      <div>
      <img src={image4} alt="MenPic"/>
      <h3>Price:{price4}</h3>
      </div>
      <div>
      <img src={image5} alt="MenPic"/>
      <h3>Price:{price5}</h3>
      </div>
      <div>
      <img src={image6} alt="MenPic"/>
      <h3>Price:{price6}</h3>
      </div>
      <div>
      <img src={image7} alt="MenPic"/>
      <h3>Price:{price7}</h3>
      </div>
      <div>
      <img src={image8} alt="MenPic"/>
      <h3>Price:{price8}</h3>
      </div>
      <div>
      <img src={image9} alt="MenPic"/>
      <h3>Price:{price9}</h3>
      </div>
      <div>
      <img src={image10} alt="MenPic"/>
      <h3>Price:{price10}</h3>
      </div>
     </div>
    </div>
  )
}

export default Collection
