import { useEffect, useState } from 'react';
import AuthForm from '../components/auth/auth-form';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getSession().then((session) => {
      if(session){
        router.replace('/');
        return
      }

      setLoading(false);
    })
  }, [])

  if(loading){
    return <p>Loading...</p>
  }

  return <AuthForm />;
}

export default AuthPage;
