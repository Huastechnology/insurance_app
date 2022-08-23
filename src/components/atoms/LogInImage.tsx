import { faker } from '@faker-js/faker';
import './styles/LogInImage.css';

export const LogInImage = () => {

  return (
    <figure>
      <img className='img' src={faker.image.abstract()} alt="Imagen" />
    </figure>
  );
}
