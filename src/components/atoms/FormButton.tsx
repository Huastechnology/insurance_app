import { Button } from '@mui/material';

type ButtonText = {
  text: string,
}

export const FormButton = ({ text }: ButtonText) => {

  return (
    <Button variant="contained" type='submit'>{text}</Button>
  );
}