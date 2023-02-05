import PropTypes from 'prop-types';

export default function Sum({ num1, num2 }) {
  return <p>Soma: {num1 + num2}</p>;
}

Sum.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
};
