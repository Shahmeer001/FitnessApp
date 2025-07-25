// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAT9OR4gVOdgSjo1OLpdhjT8erY53tYJJY',
  authDomain: 'fitnessapp-7b7e1.firebaseapp.com',
  projectId: 'fitnessapp-7b7e1',
  storageBucket: 'fitnessapp-7b7e1.appspot.com',
  messagingSenderId: '740232199472',
  appId: '1:740232199472:web:46be62ab9d6685608a5cf5',
  measurementId: 'G-851ZF699HS',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
