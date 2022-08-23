import { LogInCard } from '../molecules/LogInCard';
import { LogInRememberMe } from '../atoms/LogInRememberMe';
import { Card, CardContent } from '@mui/material';
import { Lock } from '@mui/icons-material';
import './styles/LogIn.css';

export const LogIn = () => {

  return (
    <div className='container'>
      <Card className='card' variant="outlined" sx={{ maxWidth: 375 }}>
        <CardContent>
          <Lock />
          <LogInCard />
          <LogInRememberMe />
        </CardContent>
      </Card>
    </div>
  );
}