import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components"
import { auth } from "../firebase";


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



export default function GithubButton() {
    const onClick = async() => {
        try{
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth,provider)
        } catch(error) {
            console.error(error)
        }
    }
    return (
        <Button onClick={onClick}>
            Continue  with Github
        </Button>
    )
}