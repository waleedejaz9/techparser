import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from 'swiper';

import 'keen-slider/keen-slider.min.css';
import 'swiper/swiper.min.css';

import Container from '../Container';
import women from '../../public/women.svg';
import arrowRight from '../../public/arrowright.svg';

// import Swiper styles
SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

const CustomSlider = () => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    }
  });
  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  const dot = () => {
    return (
      <>
        {slider && (
          <div className="ml-16 mt-10">
            {[...Array(slider.details().size).keys()].map(idx => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                />
              );
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div ref={sliderRef} className="keen-slider md:-mt-24 2xl:-mt-40">
        <div className="keen-slider__slide">
          <Container>
            <div className="md:flex md:gap-x-48">
              <div className="flex flex-col md:w-6/12">
                <div className="hidden md:block  md:ml-7">
                  <Image src={women}></Image>
                </div>

                <div className="block md:hidden pl-10 pr-10">
                  <img
                    className="w-full mt-14  rounded-tl-5xl rounded-br-5xl"
                    src="/office.svg"
                    alt="banner"
                  ></img>
                </div>
                {/* <Swiper
                  modules={[EffectFlip]}
                  effect="flip"
                  pagination={true}
                  grabCursor={true}
                  className="mySwiper"
                >
                  {[1, 2, 3].map((i, el) => {
                    return (
                      <SwiperSlide key={el}>
                        {' '}
                        <div className="hidden md:block  md:ml-7">
                          <Image src={women}></Image>
                        </div>
                        <div className="block md:hidden pl-10 pr-10">
                          <img
                            className="w-full mt-14  rounded-tl-5xl rounded-br-5xl"
                            src="/office.svg"
                            alt="banner"
                          ></img>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper> */}
                <div></div>
                {dot()}
              </div>

              <div className="md:pt-24 md:ml-20 ml-10 mr-10 2xl:mt-20 ">
                <p className="font-gilroy md:text-4xl 2xl:text-5xl text-2xl pt-20 font-bold md:w-7/12  text-textDark">
                  Leading Companies trust us to develop software{' '}
                  <span className="text-primary -ml-2">.</span>
                </p>
                <p className="font-gilroy 2xl:text-2xl text-xl font-thin md:w-11/12 pt-6 text-textLight tracking-wider leading-10">
                  We add development capacity to tech teams. Our value
                  isn&apos;t post limited to building teams but is equally
                  distributed across the project lifecycle. We are a custom
                  software development company that guarantees the successful
                  delivery of your project.
                </p>
                <a href="/" className="flex mt-14">
                  <p className="font-gilroy text-primary md:text-xl 2xl:text-xl">
                    Find more
                  </p>
                  <div className="w-12 flex items-center pl-3">
                    <Image src={arrowRight}></Image>
                  </div>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
export default CustomSlider;
