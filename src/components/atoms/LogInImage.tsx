import { faker } from '@faker-js/faker';
import './styles/LogInRememberMe.css';

export const LogInImage = () => {

  return (
    <div>
      <img className='img' src={faker.image.abstract()} alt="Imagen" />
    </div>
  );
}
