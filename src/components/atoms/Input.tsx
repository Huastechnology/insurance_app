import { TextField } from '@mui/material';

type InputProps = {
  value: string,
  inputName: string,
  inputType: 'text' | 'password',
  onChange: (text: string) => void;
}

export const Input = ({ value, inputName, inputType, onChange }:  InputProps) => {

  return (
    <TextField label={inputName} variant="outlined" value={value} type={inputType} onChange={(e) => onChange(e.target.value)} />
  );
}