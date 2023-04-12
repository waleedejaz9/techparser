import PropTypes from 'prop-types';

const Button = ({ text, customClassName }) => {
  return (
    <>
      <button className={customClassName}>{text}</button>
    </>
  );
};
export default Button;

Button.defaultProps = {
  customClassName: ' ',
  text: ' '
};

Button.propTypes = {
  customClassName: PropTypes.string,
  text: PropTypes.string
};
