import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Demo Email and Password (LOGIN)"
      description1="Instructor: rajatkumardabas@gmail.com , 1234"
      description2="Student:    rajatdabas05@gmail.com   ,   1234"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
