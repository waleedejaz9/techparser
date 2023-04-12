import PropTypes from 'prop-types';

const stackButton = ({ currentTab, onClick, onHover, id }) => {
  return (
    <button
      onMouseEnter={() => onHover(true)}
      className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
        currentTab === id ? 'text-primary' : 'text-white'
      } `}
      onClick={() => onClick(0)}
    >
      Frontend{' '}
      <span
        className={` -ml-1 ${
          currentTab === id
            ? 'text-white'
            : 'text-primary group-hover:text-white'
        }`}
      >
        .
      </span>
      <div
        className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
          currentTab === id ? 'border-primary' : 'border-transparent'
        } group-hover:border-primary`}
      ></div>
    </button>
  );
};
export default stackButton;

stackButton.defaultProps = {
  customClassName: ' ',
  arrowClassName: ' '
};

stackButton.propTypes = {
  customClassName: PropTypes.string,
  arrowClassName: PropTypes.string
};
