import PropTypes from 'prop-types';

export default function Sum(num1, num2) {
  return num1 + num2;
}

Sum.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
};
