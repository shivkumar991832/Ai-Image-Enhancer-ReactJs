import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/EnhancedImgApi'

const Home = () => {

  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = async (file) =>{
      //  console.log(file)
      //  setUploadImage()
      // creating object of file(behave like link of image)
      console.log(URL.createObjectURL(file))
      setUploadImage(URL.createObjectURL(file))

      setLoading(true)
      // calling the API to enhanced the image
      // file me hamara imgage hai jiska enhanced karwana hai
      try {
        const enhancedURL = await enhancedImageAPI(file)
        setEnhancedImage(enhancedURL?.image)
        setLoading(false)
      } catch (error) {
        console.log(error)
        alert("Error occure during enhancing the image. Please try gain later ")
      } 
  }

  // console.log(enhancedImage.image)
  return (
    <>
       <ImageUpload uploadImageHandler={uploadImageHandler}/>
       <ImagePreview loader={loading} uploaded={uploadImage} enhanced={enhancedImage}/>
    </>
  )
}

export default Home
