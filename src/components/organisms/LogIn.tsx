import { LogInCard } from '../molecules/LogInCard';
import { LogInRememberMe } from '../atoms/LogInRememberMe';
import { Card, CardContent, Alert } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { IUserLogin } from '../../@customTypes/entities/user';
import fetchJson from '../../services/lib/fetchJson';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export const LogIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitForm = async (data: IUserLogin | any) => {
    try {
      const response = await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if(response.token) {
        navigate('/');
      }
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    setTimeout(()=> {
      setErrorMessage('');
    }, 5000);
  }, [errorMessage]);

  return (
    <Card className='card' variant="outlined" sx={{ maxWidth: 375 }}>
      <CardContent>
        <Lock />
        <LogInCard onSubmitForm ={onSubmitForm} />
        <LogInRememberMe />
        <Alert severity="error" style={{display: errorMessage ? 'flex' : 'none', marginTop: 10}}>
          {errorMessage}</Alert>
      </CardContent>
    </Card>
  );
}