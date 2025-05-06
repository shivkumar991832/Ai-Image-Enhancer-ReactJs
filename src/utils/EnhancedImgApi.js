import axios from "axios"


const API_KEY = "wx9oh6w7jtv3w4th9"
const BASE_URL = "https://techhk.aoscdn.com/"
const MAX_RETRIES = 20;


export const enhancedImageAPI = async (file) =>{
//   code to call api and get enhanced image url

try {
   // upload the img(post)
   const taskID = await uploadImage(file)
   console.log("img Uploaded succesfully , Task ID : ", taskID)
   


   // your taskID is your enhanced image id
   // get the image
   // we need to pulling of below code (api ko bar bar call karna jab tak data mil na jaye)


   const enhancedImgData = await pollForEnhancedImage(taskID)
   console.log("Enhanced Img Data : " , enhancedImgData)
    return enhancedImgData


} catch (error) {
   console.log("Error enhancing image:", error.message)
}


}


const uploadImage = async (file) =>{
   const formData = new FormData()
   formData.append("image_file", file)

   // code to upload image (Post method)

  const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
      headers: {
         "Content-Type": "multipart/form-data",
         "X-API-KEY": API_KEY
       }
   })

   if(!data?.data?.task_id){
      throw new error("Failed to upload Image! Task ID not found")
   }

   
   return data.data.task_id
}

// its recursive function(calling itself)
// jab tak image gen na ho tab tak fetchEnhancedImage ko call karte raho
const pollForEnhancedImage = async(task_id, retries = 0)=>{
   const result = await fetchEnhancedImage(task_id)
   // console.log(result)
   // we need calling it every time untill we got the image



   if (result.state === 4) {
      console.log(`Processing......(${retries}/${MAX_RETRIES})`);

      if (retries >= MAX_RETRIES) {
         throw new Error("Max retries reached Please try again later...")
      }
      //code for wait for 2 sec
      await new Promise((resolve)=> setTimeout(resolve, 2000))

      // after 2sec above methods call itself
   
      return pollForEnhancedImage(task_id, retries + 1);
   }



   
   // console.log("Enhanced Image URL : ", result)
   return result


}

const fetchEnhancedImage = async (taskId) =>{
   // fetch enhanced image from API(Get Method)

   const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
      {
         headers: {
              "X-API-KEY": API_KEY
                  }
      })


      if(!data?.data){
         throw new error("Failed to fetch enhanced image ! Image not found")
      }
      return data.data
      
 
}


