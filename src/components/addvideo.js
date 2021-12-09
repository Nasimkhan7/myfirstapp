import "./signup.css";
import { Button, TextField} from '@mui/material'
import { Formik,  } from "formik";
import app_config from "../config";
import Swal from "sweetalert2";
import { useState } from "react";


const AddVideo = () => {
   
const videoform ={
    title: "",
    description: "",
    thumbnail:"",
    file: "",
};

const url= app_config.api_url;

const[thumbnail,setThumnail]=useState("");
const[video,setVideo]=useState("");




const videoSubmit =(values,{setSubmitting,resetForm}) =>{
  values.thumbnail=thumbnail;
  values.file=video;

  console.log(values);

const reqOpt ={
  method: 'POST',
  body: JSON.stringify(values),
  headers:{
    "Content-type":"application/json"
  },
};

fetch(url + "/video/add",reqOpt)
.then ((res ) => res.json())
.then ((data) =>{
  console.log (data);
  Swal.fire({
      icon:"success",
      title:"success",
      text:"Video Added Success",
  });
  resetForm();
  setThumnail("");
  setVideo();
});
};
 const uploadThumbnail =(e)=> {
     let formdata = new FormData();
     let file = e.target.files[0];
     setThumnail(file.name);
    formdata.append("file",file); 

    fetch(url +"/util/uploadfile",{method:"POST",body:formdata})
    .then((res)=>res.json())
    .then((data)=> console.log(data));


 };

 const uploadVideo =(e)=> {
  let formdata = new FormData();
  let file = e.target.files[0];
  setVideo(file.name);
 formdata.append("file",file); 

 fetch(url +"/util/uploadfile",{method:"POST",body:formdata})
 .then((res)=>res.json())
 .then((data)=> console.log(data));


};





  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row">
          <div class="col-md">
            <div class="img-back"></div>
          </div>

          <div class="col-md">
            <div class="card-body my-card-body">
              <p class="h3">Start Building your Future</p>
              <p class="text-muted">add New video</p>

              <hr />

            <Formik initialValues={videoform} onSubmit={videoSubmit}>
               {({values, handleSubmit,handleChange}) =>(
                   <form onSubmit={handleSubmit}>
                
                   <TextField
                    className="w-100 mt-5"
                    variant="filled"
                      id="title"
                      type="text"
                      label="video Title"
                      onChange={handleChange}
                      value={values.email}
                    />
    
                    <TextField
                    className="w-100 mt-2"
                    variant="filled"
                      id="description"
                      type="text"
                      label="video Description"
                      onChange={handleChange}
                      value={values.username}

                    />
                   


                    <label className="mt-3"> UploadThumbnail  </label>
                   <input type="file"className="form-control mt-3" onChange={uploadThumbnail}/> 
                   <label className="mt-3"> UploadVideo </label>
                  <input type="file"className="form-control mt-3" onChange={uploadVideo}/>
            
                    <Button type="submit" color="primary" variant="contained"className="mt-5 w-100" >sing up </Button>
    
                    <a
                      href="/"
                      class="text-muted mt-5"
                      style={{ display: "block" }}
                    >
                      Already Have an account?
                    </a>
                  </form>
               )
               }

            </Formik>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;