import { Link, RouteComponentProps } from '@reach/router'
import { List, ListItem, ListItemText } from '@mui/material';

export const Home = (props: RouteComponentProps) => {

  return (
    <List>
      <ListItem button component={Link} to='login'>
        <ListItemText primary='LogIn' />
      </ListItem>
    </List>
  );
}