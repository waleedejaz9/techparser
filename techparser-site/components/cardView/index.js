import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from '../Container';

const CardView = ({ image, title, description }) => {
  return (
    <div className="border-transparent rounded-xl pt-7 pb-20 md:w-2/12 w-7/12 shadow-xl font-gilroy text-center">
      <Container>
        <div className="flex justify-center">
          <div className="w-24 ">
            <Image src={image}></Image>
          </div>
        </div>
        <h3 className="text-textDark font-gilroy pt-3 text-lg">{title}</h3>
        <div className="flex justify-center ">
          <p className="pt-5 text-textLight font-gilroy text-sm pr-10 tracking-wider pl-9 text-center">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
};
export default CardView;

CardView.defaultProps = {
  title: ' ',
  description: ' '
};

CardView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
