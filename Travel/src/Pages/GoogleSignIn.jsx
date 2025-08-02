import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Google credential response:", credentialResponse);

    try {
      const response = await fetch('https://travelease-m121.onrender.com/api/v1/users/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          credential: credentialResponse.credential, // important
        }),
      });

      const data = await response.json();
      console.log("Backend response after Google login:", data);

      if (response.ok) {
        alert('Google login successful!');
        localStorage.setItem('token', data.accessToken); // store access token
        navigate('/dashboard');
      } else {
        alert(data.message || 'Google login failed');
      }
    } catch (err) {
      console.error('Error during Google login:', err);
      alert('Something went wrong during Google login.');
    }
  };

  return ( 
    <div className="mt-5 flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => {
          console.error('Google login error');
          alert('Google login failed!!');
        }}
      />
    </div>
  );
};
