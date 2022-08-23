
import IconButton from '@mui/material/IconButton';
interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const ButtonIcon = ({onClick,children}:ButtonProps) => (
    <IconButton onClick={onClick}>
        {children}
    </IconButton>
)