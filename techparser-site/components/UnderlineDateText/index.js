import PropTypes from 'prop-types';

const UnderlineDateText = ({
  date,
  text,
  dateClassName,
  textClassName,
  customClassName
}) => {
  return (
    <div className={customClassName}>
      <h2 className={dateClassName}>{date}</h2>

      <h2 className={textClassName}>{text}</h2>
    </div>
  );
};
export default UnderlineDateText;

UnderlineDateText.defaultProps = {
  dateClassName: ' ',
  textClassName: ' '
};

UnderlineDateText.propTypes = {
  dateClassName: PropTypes.string,
  textClassName: PropTypes.string,
  customClassName: PropTypes.string
};
