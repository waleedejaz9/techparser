import Image from 'next/image';
import PropTypes from 'prop-types';

const AboutCardView = ({
  image,
  title,
  description,
  titleClassName,
  descriptionClassName,
  cardViewClassName
}) => {
  return (
    <div className={`${cardViewClassName}`}>
      <div className="flex justify-center  -ml-14">
        <div className="w-16">
          <Image src={image}></Image>
        </div>

        <h3 className={titleClassName}>{title}</h3>
      </div>
      <div className="flex justify-center">
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
};
export default AboutCardView;

AboutCardView.defaultProps = {
  descriptionClassName: ' ',
  titleClassName: ' ',
  cardViewClassName: ' ',
  description: ' ',
  title: ' '
};

AboutCardView.propTypes = {
  descriptionClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  cardViewClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};
