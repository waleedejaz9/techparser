import PropTypes from 'prop-types';

const Container = ({ customClassName, children }) => {
  return (
    <div
      className={`${customClassName} container sm:max-w-xl md:max-w-screen-2xl xl:max-w-screen-xl 2xl:max-w-screen-2xl`}
    >
      {children}
    </div>
  );
};

export default Container;

Container.defaultProps = {
  customClassName: ' '
};

Container.propTypes = {
  customClassName: PropTypes.string
};
