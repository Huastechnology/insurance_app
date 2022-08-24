import { FormEventHandler, useState } from 'react';
import { Input } from '../atoms/Input';
import { FormButton } from '../atoms/FormButton';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import './styles/LogInCard.css';

type ILogInForm = {
  onSubmitForm: (data: any) =>  void
}

export const LogInCard = ({onSubmitForm}: ILogInForm) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (text: string) => {
    setEmail(text);
  }

  const handlePassword = (text: string) => {
    setPassword(text);
  }

  const userCredentials = {
    email,
    password,
  }
  

  const logIn: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmitForm(userCredentials)
  }

  return (
    <FormGroup>
      <form onSubmit={logIn} className='LogInForm' style={{gap: 20}}>
        <Input value={email} inputName='Email' inputType='text' onChange={handleEmail} />
        <Input value={password} inputName='Password' inputType='password' onChange={handlePassword} />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <FormButton text='Log In'/>
      </form>
  </FormGroup>
  );
}