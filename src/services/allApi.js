import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

//define all api for project,it calls  commonAPI function

//uploadvideo api - api must call by Add Component
export const uploadVideoAPI = async(video)=>{
   return  await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}


//getAllVideoAPI - called by View Component

export const getAllVideoAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
 }

 //saveHistory API - called by VideoCard
 export const saveHistoryAPI = async(videoDetails)=>{
   return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)

 }
 //getHistoryAPI - called by History
 export const getHistoryAPI = async()=>{
   return await commonAPI("GET",`${SERVER_URL}/history`,"")

 }

 //removeHistoryAPI - called by history
 export const  removeHistoryAPI = async (id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})  //remeber "DELETE" http request always except object{}(body part)
}

//removeVideoAPI - called by videocard
export const  removeVideoAPI = async (id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})  
}

//addcategoryAPI -  called by category
export const  addcategoryAPI = async(categoryDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/cartegories`,categoryDetails)

}

//getAllcategoryAPI -  called by category
export const  getAllCategoryAPI = async()=>{
  return await commonAPI("GET",`${SERVER_URL}/cartegories`,"")

}

//removeCategoryAPI - called by category
export const  removeCategoryAPI = async (id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/cartegories/${id}`,{})  
}

//getSingleVideoAPI - called by category
export const getSingleVideoAPI= async (id)=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")

}

//updateCategoryAPI - called by category
export const  updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
  return await commonAPI("PUT",`${SERVER_URL}/cartegories/${categoryId}`,updateCategoryDetails)  
}

//getSingleCategoryAPI - called by View

export const getSingleCategoryAPI =async(id)=>{
  return await commonAPI("GET",`${SERVER_URL}/cartegories/${id}`,"")  

}