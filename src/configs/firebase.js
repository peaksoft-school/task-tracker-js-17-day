import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDfhRLjfy_rCxza71DZGzQjVbkpqRhDayw',
  authDomain: 'task-tracker-auth-a7884.firebaseapp.com',
  projectId: 'task-tracker-auth-a7884',
  storageBucket: 'task-tracker-auth-a7884.firebasestorage.app',
  messagingSenderId: '1038747631931',
  appId: '1:1038747631931:web:86e1631403571e8999f71e',
  measurementId: 'G-REEVTVNLZM',
}
const app = initializeApp(firebaseConfig, 'task-tracker')
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()