import { LogInCard } from '../molecules/LogInCard';
import { LogInRememberMe } from '../atoms/LogInRememberMe';
import { Card, CardContent } from '@mui/material';
import { Lock } from '@mui/icons-material';

export const LogIn = () => {

  return (
    <Card className='card' variant="outlined" sx={{ maxWidth: 375 }}>
      <CardContent>
        <Lock />
        <LogInCard />
        <LogInRememberMe />
      </CardContent>
    </Card>
  );
}