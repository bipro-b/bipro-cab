import { useRouter } from "next/navigation";
import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import WestIcon from "@mui/icons-material/West";
import * as yup from "yup";
import { useFormik } from "formik";
import { getUser, registerUser } from "@/Redux/Auth/Action";
import { Button, TextField } from "@mui/material";
import { store } from "@/Redux/store";

const validationSchema = yup.object().shape({
  userName:yup.string().required("User name is required"),
  userEmail: yup.string().email("Invalid email").required("Email is required"),
  userPassword: yup.string().min(6,"Password should be at least 6 characters.").required("Password is required"),
  userRole:yup.string().required("User role is required")
});

function Register() {

  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };


  const jwt = localStorage.getItem("access_token");
  const {auth} = useSelector((store)=>store)


  
  const formik = useFormik({
    initialValues: {
      userName:"",
      useEmail: "",
      userPassword: "",
      userRole:"",
      userMobile:"+880 "
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(registerUser(values));
    },
  });

  useEffect(() => {
    console.log("jwt ", jwt);
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  // useEffect(()=>{
  //   if(auth.user?.userName||auth.user?.name){
  //     router.push("/")
  //   }
  // },[auth.user])

  return (
    <div className="py-10">
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        <div>
          <img
            className="h-10"
            src="https://accounts.olacabs.com/en-in/images/ola-logo.png"
          />
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="z-50 h-full p-5">
      <TextField
          label="Full Name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userName"
          value={formik.values.userName}
          error={formik.touched.userName && formik.errors.userName}
          helperText={formik.touched.userName && formik.errors.userName}
        ></TextField>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userEmail"
          value={formik.values.userEmail}
          error={formik.touched.useEmail && formik.errors.useEmail}
          helperText={formik.touched.useEmail && formik.errors.useEmail}
        ></TextField>

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userPassword"
          value={formik.values.userPassword}
          error={formik.touched.userPassword && formik.errors.userPassword}
          helperText={formik.touched.userPassword && formik.errors.userPassword}
        ></TextField>
        <TextField
          label="Role"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userRole"
          value={formik.values.userRole}
          error={formik.touched.userRole && formik.errors.userRole}
          helperText={formik.touched.userRole && formik.errors.userRole}
        ></TextField>
        <TextField
          label="Mobile Number"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userMobile"
          value={formik.values.userMobile}
         
        ></TextField>

        <Button
        sx={{padding:".9rem 0rem"}}
        variant="contained"
        className="z-10 w-full"
        type="submit"
        color="secondary"
        >
          Register
        </Button>
      </form>
      <div className="flex w-full justify-center">
        <p className="flex items-center mt-5 text-center">
           Already Have an Account? {" "}
        <Button
        onClick={()=>router.push("/login")}
        className="ml-5"
        color="secondary"
        >
          Login
        </Button>

        </p>
      </div>
    </div>
  )
}

export default Register