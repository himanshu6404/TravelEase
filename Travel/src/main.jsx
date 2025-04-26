import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="534367991805-qmq1l7bivr2dehqq0eian2gnsoj2h0h5.apps.googleusercontent.com">
    <StrictMode>
    <App/>
  </StrictMode>,
  </GoogleOAuthProvider>

)
