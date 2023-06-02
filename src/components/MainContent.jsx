import React from 'react'
import image1 from "../images/cryptoimage.jpg"
import image2 from "../images/backgroundImage2.jpg"

const MainContent = () => {
  return (
    <div className='flex flex-col items-center justify-center p-3'>

      <div>
        <img src={image1} style={{ height: { xs: "300px", sm: "500px" }, marginTop: "25px" }} alt="image" />
      </div>
      <div>
        <img src={image2} style={{ height: { xs: "300px", sm: "500px" }, width: "900px", marginTop: "25px" }} alt="image" />
      </div>

    </div>
  )
}

export default MainContent