import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzzvxJgj39IBke2NU0JpYOpr82SVZOToc',
  authDomain: 'react-disney-plus-app-75ff9.firebaseapp.com',
  projectId: 'react-disney-plus-app-75ff9',
  storageBucket: 'react-disney-plus-app-75ff9.appspot.com',
  messagingSenderId: '995976586147',
  appId: '1:995976586147:web:92db7d3c55d98a8de3f016',
  measurementId: 'G-TEVJ8K738N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
