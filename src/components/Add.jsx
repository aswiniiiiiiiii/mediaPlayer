import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allApi';


const Add = ({setVideoUploadResponse}) => {
  const [show, setShow] = useState(false);
   const [videoDetails,setvideoDetails] = useState({
    caption :"",url:"",link:""
   })
   const [isInValidLink,setIsInvalidLink] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(videoDetails);
   const getEmbedLink =(youTubeLink)=>{
    if(youTubeLink.includes("v=")){
      const videoId = youTubeLink.split("v=")[1].slice(0,11)
      console.log(videoId);
      setvideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
      setIsInvalidLink(false)
    }else{
      setIsInvalidLink(true)
      console.log("Invalid Link!! Please Enter a valid URL");
      setvideoDetails({...videoDetails,link:""})
    }
   }
   const handleUploadVideo = async()=>{
    const {caption,url,link} = videoDetails
    if(caption && url && link){
      // alert("call api")
      try{
      const response = await uploadVideoAPI(videoDetails)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        handleClose()
        setvideoDetails({...videoDetails,caption:"",url:"",link:""})
        setVideoUploadResponse(response.data)
        alert("Video Uploaded Successfully")
      }
      
      }catch(err){
        console.log(err);
        
      }
    }
    else{
      alert("Please fill the form completely!!")
    }
   }
  return (
    <>
      <div className="d-flex  align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fs-5 fw-bolder'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border p-3 border'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3" >
              <Form.Control onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputUrl"
              label="Img URL"
              className="mb-3" >
              <Form.Control onChange={e=>setvideoDetails({...videoDetails,url:e.target.value})} type="text" placeholder="Img URL" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputILink"
              label="Youtube Link"
              className="" >
              <Form.Control onChange={e=>getEmbedLink(e.target.value)} type="text" placeholder="Youtube Link" />
            </FloatingLabel>
              {  isInValidLink &&
                <div className="mt-3 text-danger fw-bolder">
                Invalid YouTube Link
              </div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
