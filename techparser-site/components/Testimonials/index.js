import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

import 'keen-slider/keen-slider.min.css';
import doubleQuotes from '../../public/doubleQuotes.svg';

const Testimonials = ({ bioDataItems }) => {
  const chunk = (arr, size) =>
    arr.reduce(
      (acc, e, i) => (
        i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      ),
      []
    );
  let getSlideChunk = chunk(bioDataItems, 2);

  const getNameInitials = name => {
    let splitNames = name.split(' ');
    let initials;
    if (splitNames) {
      initials =
        splitNames[0].charAt(0).toUpperCase() +
        splitNames[1].charAt(0).toUpperCase();
      return initials;
    } else {
      initials = splitNames[0].charAt(0).toUpperCase();
      return initials;
    }
  };

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
          <div className="dot-margin-testimonials flex justify-center md:justify-start pt-14 md:pt-0">
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
  // if (bioDataItems.imagePath == ' ' || bioDataItems.imagePath == null) {
  return (
    <>
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {getSlideChunk.map((item, Index) => {
          return (
            <div
              className="keen-slider__slide  overflow-hidden flex md:flex-row flex-col items-center md:gap-x-12 gap-y-20"
              key={Index}
            >
              {item.map((subItem, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 bg-white rounded-xl border-primaryLight  md:w-80 w-7/12 shadow-lg pb-14 font-gilroy text-center"
                  >
                    <div className="flex justify-center -m-14">
                      <div className="bg-primary rounded-full h-28 w-28 flex justify-center items-center">
                        <h2 className="font-gilroy font-semibold text-white">
                          {getNameInitials(subItem.name)}
                        </h2>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-10 pt-24 ">
                        <Image src={doubleQuotes} alt="clientProfile"></Image>
                      </div>
                    </div>
                    <h3 className="font-bold text-base pt-5 text-textDark">
                      {subItem.name}
                    </h3>
                    <p className=" text-textLight text-sm pt-1">
                      {subItem.title}
                    </p>
                    <div className="flex justify-center">
                      <p className="text-textLight pt-6 w-10/12 text-xs leading-6 font-semibold">
                        {subItem.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {dot()}
    </>
  );
};
//  else {
//   return (
//     <div className="flex md:flex-row flex-col md:gap-x-12 gap-y-20 ">
//       {bioDataItems.map((item, index) => (
//         <div
//           key={index}
//           className="border bg-white rounded-xl border-primary w-80 shadow-lg pb-14 font-gilroy text-center"
//         >
//           <div className="flex justify-center -m-11">
//             <div className="rounded-full h-28 w-28 flex justify-center items-center">
//               <Image src={item.imagePath} alt="clientProfile"></Image>
//             </div>
//             ;
//           </div>

//           <div className="flex justify-center">
//             <div className="w-10 pt-24 ">
//               <Image src={doubleQuotes} alt="clientProfile"></Image>
//             </div>
//           </div>
//           <h3 className="font-bold text-base pt-5 text-textDark">
//             {item.name}
//           </h3>
//           <p className=" text-textLight">{item.title}</p>
//           <div className="flex justify-center">
//             <p className="text-textLight pt-5 w-10/12 text-xs leading-6 font-semibold">
//               {item.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// };
export default Testimonials;
