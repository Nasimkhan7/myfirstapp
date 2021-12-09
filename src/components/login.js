
import toast,{Toaster} from "react-hot-toast";
import Swal from "sweetalert2";
import {Formik} from 'formik';
import app_config from "../config";
import "./login.css";
import { ProductContext } from "../productContext";
import { useContext } from "react";

const Login =() => {
    const url =app_config.api_url;

    const {setLoggedin} = useContext(ProductContext);
    
    const loginForm = {
        email: '',
        password : '',
    }
     

    const loginsubmit = (value) => {
        console.log(value);

      const reqOpt ={
          method: 'POST',
          body: JSON.stringify(value),
          headers: {
              "Content-type":"application/json",
          }
      };


        fetch(url+'/user/backendlogin',reqOpt)
        .then((res) =>{
            if (res.status ==200){
                console.log("login success");
                res.json().then((data)=>{
                    sessionStorage.setItem('user',JSON.stringify(data));
                    setLoggedin(true);
                });
                // toast. success("Loggedin Successfully")

                Swal.fire({
                    icon :"success",
                    title : "Auto close alert ",
                    text : "login success",


                });
            }else if(res.status==300){
                console.log("login failed");
                //toast.error("Login Failed");

                Swal.fire({
                    icon:"error",
                    title :"Failed",
                    text :"login failed",
                });
            }
        });


    };

    return(
        <div class="container mt-5">
        <div class="card">
            <div class="row">
             <div class="col-md">
                 <div class="img-back">

                 </div>

             </div>

             <div class="col-md">
             <div class="card-body" my-card-body>
             <p class="h3 text-center">Star Building your Future</p>
             <p class="text muted text-center"><i>Star Building your Future</i></p>
        <hr/>

          <Formik initialValues={loginForm} onSubmit={loginsubmit}>
                { ({values, handleSubmit, handleChange}) => (
                    <form onSubmit={handleSubmit} >

    
                    <label for="Email " class="mt-5">Email</label>
                    <input id="email" type="Email" class="form-control" placeholder="Email" onChange={handleChange} value={values.email}  />
            
            
                    <label for="Password " class="mt-5">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="Password" onChange={handleChange} value={values.password} />
            
                    <label class="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                      </label>
                     
            
                    <button type="submit" class="btn btn-outline-primary w-25 mt-5">Sign Up </button>
                    <a href="#" class="text-muted mt-5" style={{display: 'block'}}>Already Have an acount</a>
            
            
                      </form>
                ) }
          </Formik>
             </div>
            </div>   
            </div>
        </div>
    </div>
    )


}
export default Login;
