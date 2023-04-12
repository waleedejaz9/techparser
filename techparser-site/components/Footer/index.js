import Image from 'next/image';

import linkedin from '../../public/linkedin.svg';
import medium from '../../public/Negative.svg';
import right from '../../public/right.svg';
import Container from '../Container';
import Menu from '../Menu';

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About Us', link: '/' },
  { text: 'Our Services', link: '/' },
  { text: 'Blog', link: '/' },
  { text: 'Contact Us', link: '/' }
];

const Footer = () => {
  return (
    <div className="bg-primary pt-20 md:pt-32  xl:pb-36 pb-36">
      <div className="flex justify-center">
        <Container>
          <div className="grid md:grid-cols-5">
            <div className="flex xl:justify-center md:pl-10 xl:pl-0 ">
              <p className="text-white text-xl md:text-lg xl:text-xl lr-writing-mode text-right hidden md:block ">
                WEB LINK / email / address / link to services?
              </p>
            </div>

            <div className="flex justify-center md:pt-12">
              <div className="grid md:grid-rows-3 md:gap-y-7 md:w-8/12 ">
                <h1 className="text-white font-semibold text-3xl xl:text-5xl md:text-4xl ">
                  Connect with us
                  <span className="text-black font-bold text-4xl">.</span>
                </h1>
                <div className="pl-4 pt-3 hidden md:block xl:w-20 md:w-16">
                  <Image src={right} alt="medium"></Image>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end ">
              <div className="flex-col md:pt-12 pt-20">
                <p className="font-gilroy text-white text-center md:text-left font-semibold xl:text-3xl md:text-2xl text-2xl pb-16 md:pb-12 xl:pb-16">
                  Menu
                </p>
                <Menu menuItems={menuItems} />
              </div>
            </div>

            <div className="flex md:justify-end justify-center md:pt-12 pt-12 md:pl-3 xl:pl-0">
              <div className="flex flex-col">
                <p className="font-gilroy text-white text-center md:text-left font-semibold xl:text-3xl text-2xl">
                  Office
                </p>
                <p className="text-white font-gilroy text-base md:text-sm xl:text-base md:leading-7 leading-9 footer-office-padding ">
                  308 Office 15, floor 3 DHA phase5,
                  <br className="xl:block hidden"></br>
                  Lahore, Pakistan
                </p>
              </div>
            </div>
            <div className="flex xl:justify-center md:justify-end xl:pl-12 md:pr-10 xl:pr-0 md:pl-0">
              <div className="flex items-center pt-20">
                <p className="text-white lr-writing-mode font-gilroy md:text-lg text-xl hidden md:block ">
                  connect.
                </p>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-5 flex flex-col-reverse md:pt-0">
            <div className="flex xs:justify-center sm:justify-center md:justify-start xl:justify-center md:pl-10 xl:pl-0">
              <div className="flex flex-row md:flex-col">
                <a
                  className="w-16 p-2 md:w-9 xl:w-12"
                  href="https://www.linkedin.com/company/techparser"
                >
                  <Image src={medium} alt="medium" layout="responsive"></Image>
                </a>
                <a
                  className="w-16 p-2 md:w-9 xl:w-12"
                  href="https://www.linkedin.com/company/techparser"
                >
                  <Image src={linkedin} alt="medium"></Image>
                </a>
              </div>
            </div>

            <div className="flex md:items-end md:w-3/4 justify-center xl:mt-0 -mt-10 md:pt-0">
              <p className="text-white text-center md:text-left text-lg md:text-sm xl:text-lg 2xl:text-lg xl:leading-5 md:leading-3 pb-3 xl:pl-14 md:pl-16">
                or email us at <br></br>
                <a href="mailto:connect@techparser.com">
                  connect@techparser.com
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
