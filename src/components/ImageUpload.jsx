import React from 'react'

const ImageUpload = (props) => {

  
   const showImageHandler = (e) =>{
    const uploadedImg = e.target.files[0]
      // console.log(e.target.files[0])
      if(uploadedImg){
        props.uploadImageHandler(uploadedImg)
        //uploadImageHandler is a function
      }
   }


  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-blue-500 transition-all'>
        <input type="file" id="fileInput" className='hidden' onChange={showImageHandler}/>
        <span className='text-lg font-medium text-gray-600'>Click and Drag to Upload Your Image</span>
      </label>
      
    </div>
  )
}

export default ImageUpload
