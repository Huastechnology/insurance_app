import { FormEventHandler, useState } from 'react';
import { Input } from '../atoms/Input';
import { FormButton } from '../atoms/FormButton';
import { FormGroup } from '@mui/material';
import './styles/LogInCard.css';

export const LogInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (text: string) => {
    setEmail(text);
  }

  const handlePassword = (text: string) => {
    setPassword(text);
  }

  const logIn: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log('Inicio de sesión');
    
  }

  return (
    <FormGroup>
      <form onSubmit={logIn} className='LogInForm' style={{gap: 20}}>
        <Input value={email} inputName='Email' inputType='text' onChange={handleEmail} />
        <Input value={password} inputName='Password' inputType='password' onChange={handlePassword} />
        <FormButton text='Iniciar sesión'/>
      </form>
  </FormGroup>
  );
}