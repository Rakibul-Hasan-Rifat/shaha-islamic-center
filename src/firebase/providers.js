import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseGoogleProvider = new GoogleAuthProvider();

const firebaseGithubProvider = new GithubAuthProvider();

export {firebaseGoogleProvider, firebaseGithubProvider}