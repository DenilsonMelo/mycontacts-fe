import PropTypes from 'prop-types';

import Button from '../Button';
import FormGroup from '../FormGroup';
import { ButtonContainer } from '../FormGroup/styles';
import Input from '../Input';
import Select from '../Select';
import { Form } from './styles';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido.">
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">Linkedin</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
