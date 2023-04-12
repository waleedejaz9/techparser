import PropTypes from 'prop-types';
import Image from 'next/image';

import rightArrow from '../../public/rightArrow.svg';

const ArrowButton = ({ text, customClassName }) => {
  return (
    <>
      <button className={customClassName}>
        <div className="flex justify-evenly items-center">
          {text}
          <div className="hidden md:block">
            <div className="w-10 flex items-center pl-3">
              <Image src={rightArrow}></Image>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};
export default ArrowButton;

ArrowButton.defaultProps = {
  customClassName: ' ',
  text: ' '
};

ArrowButton.propTypes = {
  customClassName: PropTypes.string,
  text: PropTypes.string
};
