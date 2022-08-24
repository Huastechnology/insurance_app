import { LogInCard } from '../molecules/LogInCard';
import { LogInRememberMe } from '../atoms/LogInRememberMe';
import { Card, CardContent } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { IUserLogin } from '../../@customTypes/entities/user';
import fetchJson from '../../services/lib/fetchJson';

export const LogIn = () => {
  const onSubmitForm = async (data: IUserLogin | any) => {
    try {
      const response = await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className='card' variant="outlined" sx={{ maxWidth: 375 }}>
      <CardContent>
        <Lock />
        <LogInCard onSubmitForm ={onSubmitForm} />
        <LogInRememberMe />
      </CardContent>
    </Card>
  );
}