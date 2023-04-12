/* eslint-disable sonarjs/cognitive-complexity */
import { React, useState } from 'react';
import Image from 'next/image';

import rightParkingArrow from '../../public/rightParkingArrow.svg';
import teacher from '../../public/teacher.svg';

const ButtonContainer = ({ onClick, currentTab }) => {
  const textLight = 'text-textLight';
  const animationClass =
    'text-primary bg-primaryLight rounded-sm transition duration-500 ease-in-out transform translate-x-12 scale-10';
  const opacity100 = 'opacity-100';
  const opacity0 = 'opacity-0';

  return (
    <div className="flex flex-col mt-16 ml-0 md:w-4/12 ">
      <button
        className={`pl-10 pt-4 pb-3 group flex font-gilroy text-lg w-6/12 font-semibold  hover:text-primary hover:bg-primaryLight transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10
        ${currentTab == '1' ? animationClass : textLight}`}
        onClick={() => onClick('1')}
      >
        UI/UX Design
        <div
          className={`w-8 pl-2 ml-5 group-hover:opacity-100 opacity-0 ${
            currentTab == '1' ? opacity100 : opacity0
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>

      {currentTab == '1' && (
        <div className="block md:hidden">
          <div className="flex md:w-10/12 ">
            <div className=" flex-col mt-2 md:hidden block">
              <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        className={`${
          currentTab == 2 ? animationClass : textLight
        } mt-10 pl-10 pt-4 pb-3 group flex  font-gilroy text-lg w-8/12 p-1 font-semibold  hover:text-primary hover:bg-primaryLight rounded-sm transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10 `}
        onClick={() => onClick('2')}
      >
        Web Development
        <div
          className={`w-8 pl-2 ml-10 group-hover:opacity-100 opacity-0 ${
            currentTab == 2 ? opacity100 : opacity0
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>

      {currentTab == '2' && (
        <div className="block md:hidden">
          <div className="block md:hidden">
            <div className="flex md:w-10/12 ">
              <div className=" flex-col mt-2 md:hidden block">
                <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                  Service a name + another service
                </p>
                <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tsadempor tempus quis lectus ut id
                  vulputate.
                </p>
                <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                  E-commerce
                </p>
                <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tempor tempus quis lectus ut id
                  vulputate.sd
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={`mt-10 pl-10 pt-4 pb-3 group flex font-gilroy text-lg w-9/12 sm:w-11/12 p-1 font-semibold  hover:text-primary  hover:bg-primaryLight rounded-sm transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10 ${
          currentTab == 3 ? animationClass : textLight
        } `}
        onClick={() => onClick('3')}
      >
        Backend & Api integration
        <div
          className={`w-8 pl-2 ml-5 group-hover:opacity-100 opacity-0 ${
            currentTab == 3 ? opacity100 : opacity0
          } `}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>
      {currentTab == '3' && (
        <div className="block md:hidden">
          <div className="block md:hidden">
            <div className="flex md:w-10/12 ">
              <div className=" flex-col mt-2 md:hidden block">
                <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                  Service a name + another service
                </p>
                <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tsadempor tempus quis lectus ut id
                  vulputate.
                </p>
                <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                  E-commerce
                </p>
                <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tempor tempus quis lectus ut id
                  vulputate.sd
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={`mt-10 pl-10 pt-4 pb-3 group flex font-gilroy text-lg w-9/12 p-1 font-semibold hover:text-primary  hover:bg-primaryLight rounded-sm transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10  ${
          currentTab == 4 ? animationClass : textLight
        }`}
        onClick={() => onClick('4')}
      >
        Mobile App Development
        <div
          className={`w-8 pl-2 ml-5 group-hover:opacity-100 opacity-0 ${
            currentTab == 4 ? opacity100 : opacity0
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>
      {currentTab == '4' && (
        <div className="block md:hidden">
          <div className="block md:hidden">
            <div className="flex md:w-10/12 ">
              <div className=" flex-col mt-2 md:hidden block">
                <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                  Service a name + another service
                </p>
                <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tsadempor tempus quis lectus ut id
                  vulputate.
                </p>
                <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                  E-commerce
                </p>
                <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tempor tempus quis lectus ut id
                  vulputate.sd
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={`${
          currentTab == 5 ? animationClass : textLight
        } pl-10 pt-4 pb-3 mt-10 group flex  font-gilroy text-lg w-6/12 font-semibold  hover:text-primary hover:bg-primaryLight rounded-sm transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10 `}
        onClick={() => onClick('5')}
      >
        Databases
        <div
          className={`w-8 pl-2 ml-5 group-hover:opacity-100 opacity-0 ${
            currentTab == 5 ? opacity100 : opacity0
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>
      {currentTab == '5' && (
        <div className="block md:hidden">
          <div className="block md:hidden">
            <div className="flex md:w-10/12 ">
              <div className=" flex-col mt-2 md:hidden block">
                <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                  Service a name + another service
                </p>
                <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tsadempor tempus quis lectus ut id
                  vulputate.
                </p>
                <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                  E-commerce
                </p>
                <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tempor tempus quis lectus ut id
                  vulputate.sd
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={`${
          currentTab == 6 ? animationClass : textLight
        } mt-10 pl-10 pt-4 pb-3 group flex font-gilroy text-lg w-9/12 sm:w-11/12 p-1 font-semibold  hover:text-primary  hover:bg-primaryLight rounded-sm transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10 `}
        onClick={() => onClick('6')}
      >
        Backend & Api integration
        <div
          className={`w-8 pl-2 ml-5 group-hover:opacity-100 opacity-0 ${
            currentTab == 6 ? opacity100 : opacity0
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>
      {currentTab == '6' && (
        <div className="block md:hidden">
          <div className="block md:hidden">
            <div className="flex md:w-10/12 ">
              <div className=" flex-col mt-2 md:hidden block">
                <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                  Service a name + another service
                </p>
                <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tsadempor tempus quis lectus ut id
                  vulputate.
                </p>
                <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                  E-commerce
                </p>
                <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tempor tempus quis lectus ut id
                  vulputate.sd
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={`${
          currentTab == 7 ? animationClass : textLight
        } pl-10 pt-4 pb-3 mt-10 group flex font-gilroy text-xl w-5/12 font-semibold hover:text-primary hover:bg-primaryLight rounded-sm transition duration-500 ease-in-out transform hover:translate-x-12 hover:scale-10 `}
        onClick={() => onClick('7')}
      >
        CRM&rsquo;s
        <div
          className={`w-8 pl-2 ml-5 group-hover:opacity-100 opacity-0 ${
            currentTab == 7 ? opacity100 : opacity0
          }`}
        >
          <Image src={rightParkingArrow}></Image>
        </div>
      </button>
      {currentTab == '7' && (
        <div className="block md:hidden">
          <div className="block md:hidden">
            <div className="flex md:w-10/12 ">
              <div className=" flex-col mt-2 md:hidden block">
                <p className="text-primary font-gilroy text-xl ml-10 mt-7 font-semibold ">
                  Service a name + another service
                </p>
                <p className="text-textLight text-lg w-10/12 ml-14 mt-7 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tsadempor tempus quis lectus ut id
                  vulputate.
                </p>
                <p className="text-primary font-gilroy text-xl ml-10 mt-8 font-semibold tracking-wide">
                  E-commerce
                </p>
                <p className="text-textLight text-lg w-9/12 ml-14 mt-5 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies adipiscing tempor tempus quis lectus ut id
                  vulputate.sd
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContentContainer = ({ currentTab }) => {
  switch (currentTab) {
    case '1':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-3 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-3 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </>
      );
    case '2':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempors tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </>
      );
    case '3':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolors sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </>
      );
    case '4':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsums dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </>
      );
    case '5':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultriciese adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </>
      );
    case '6':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tempor tempus quis lectus ut id
                vulputate.ssd
              </p>
            </div>
          </div>
        </>
      );
    case '7':
      return (
        <>
          <div className="flex md:w-10/12 ">
            <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
              <Image src={teacher}></Image>
            </div>
            <div className=" flex-col mt-48 hidden md:block">
              <p className="text-primary font-gilroy text-xl ml-16 mt-7 font-semibold ">
                Service a name + another service
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies adipiscing tsadempor tempus quis lectus ut id
                vulputate.
              </p>
              <p className="text-primary font-gilroy text-xl ml-16 mt-6 font-semibold tracking-wide">
                E-commerce
              </p>
              <p className="text-textLight text-xl w-9/12 ml-16 mt-5 tracking-wide ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultriciese adipiscing tempor tempus quis lectus ut id
                vulputate.sd
              </p>
            </div>
          </div>
        </>
      );
  }
};
const Services = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const [id, setId] = useState('1');
  return (
    <div className="flex md:flex-row flex-col">
      <ButtonContainer
        onClick={setCurrentTab}
        currentTab={currentTab}
        setId={setId}
        id={id}
      />
      <ContentContainer currentTab={currentTab} />
    </div>
  );
};
export default Services;
