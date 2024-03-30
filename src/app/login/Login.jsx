import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WestIcon from "@mui/icons-material/West";
import * as yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "@/Redux/Auth/Action";
import { Button, TextField } from "@mui/material";

const validationSchema = yup.object().shape({
  userEmail: yup.string().email("Invalid email").required("Email is required"),
  userPassword: yup.string().required("Password is required"),
});

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const { auth } = useSelector((store) => store);

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (auth.user) {
      
      router.push("/book-drive"); 
    }
  }, [auth.user, router]);

  return (
    <div className="py-10">
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        <div>
          <img
            className="h-10"
            src="https://accounts.olacabs.com/en-in/images/ola-logo.png"
            alt="Ola Logo"
          />
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="z-50 h-full p-5">
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userEmail"
          value={formik.values.userEmail}
          onChange={formik.handleChange}
          error={formik.touched.userEmail && formik.errors.userEmail}
          helperText={formik.touched.userEmail && formik.errors.userEmail}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userPassword"
          value={formik.values.userPassword}
          onChange={formik.handleChange}
          error={formik.touched.userPassword && formik.errors.userPassword}
          helperText={formik.touched.userPassword && formik.errors.userPassword}
        />

        <Button
          sx={{ padding: ".9rem 0rem"}}
          variant="contained"
          className="z-10 w-full bg-blue-500"
          type="submit"
          color="secondary"
        >
          Login
        </Button>
      </form>
      <div className="flex w-full justify-center">
        <p className="flex items-center mt-5 text-center">
          Don't Have an Account?{" "}
          <Button
            onClick={() => router.push("/register")}
            className="ml-5"
            color="secondary"
          >
            Register
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Login;
