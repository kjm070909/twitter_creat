import {  sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { styled } from "styled-components";
import {auth} from "../firebase"
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-component";
import GithubButton from "../components/github-btn";


const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Login() {
  const navigate = useNavigate()  
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onClick = () =>{
    sendPasswordResetEmail(auth,email)
.then(() => {
// Password reset email sent!
// ..
})
.catch((error) => {
console.log(error)
// ..
});
}
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
     if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("")
    if( email === "" || password === "" || isLoading)return;
    try {
        setLoading(true)
        await signInWithEmailAndPassword(auth,email,password)
      // create an account
      // set the name of the user.

      navigate("/")
      // redirect to the home page
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Form onSubmit={onSubmit}>

        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Login"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher><Link to="/create-account">create-account</Link></Switcher>
      <GithubButton/>
      <Button onClick={onClick}>PasswordReset</Button>
    </Wrapper>
  );
}