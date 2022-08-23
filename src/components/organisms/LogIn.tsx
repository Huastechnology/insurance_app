import { LogInCard } from '../molecules/LogInCard';
import { Card, CardContent } from '@mui/material';
import './styles/LogIn.css';

export const LogIn = () => {

  return (
    <div className='container'>
      <Card className='card' variant="outlined" sx={{ maxWidth: 375 }}>
        <CardContent>
          <LogInCard />
        </CardContent>
      </Card>
    </div>
  );
}