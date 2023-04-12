import Image from 'next/image';
import PropTypes from 'prop-types';

import rightParkingArrow from '../../public/rightParkingArrow.svg';

const AnimationButton = ({
  onClick,
  currentTab,
  text,
  customClassName,
  arrowClassName,
  id
}) => {
  return (
    <>
      <button
        className={`${customClassName}
        ${
          currentTab == id
            ? 'text-primary bg-primaryLight rounded-sm transition duration-500 ease-in-out transform translate-x-12 scale-10'
            : 'text-textLight'
        }`}
        onClick={onClick}
      >
        {text}
        <div
          className={`${arrowClassName} ${
            currentTab == id ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>
    </>
  );
};
export default AnimationButton;

AnimationButton.defaultProps = {
  customClassName: ' ',
  arrowClassName: ' '
};

AnimationButton.propTypes = {
  customClassName: PropTypes.string,
  arrowClassName: PropTypes.string
};
