import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrXmCKPz9uILuVsTkvzUM6kY4c2g36X9M",
  authDomain: "instagram-clone-29efb.firebaseapp.com",
  projectId: "instagram-clone-29efb",
  storageBucket: "instagram-clone-29efb.appspot.com",
  messagingSenderId: "40073735397",
  appId: "1:40073735397:web:579a1a5f435aa45ce6f80c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
