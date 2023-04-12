/* eslint-disable sonarjs/cognitive-complexity */
import { React, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import lottie from 'lottie-web';

import Vue from '../../public/Vue.svg';
import mongoDb from '../../public/mongoDb.svg';
import firebase from '../../public/firebase.svg';
import noSql from '../../public/noSQL.svg';
import postgreSql from '../../public/postgreSql.svg';

const ButtonContainer = ({ onClick, onHover, currentTab }) => {
  const textWhite = 'text-white';
  const groupTextPrimary = 'text-primary group-hover:text-white';
  const textPrimary = 'text-primary';

  const borderPrimary = 'border-primary';
  const borderTransparent = 'border-transparent';

  return (
    <div className="flex md:flex-row flex-wrap justify-center md:mt-12 mt-8 md:w-7/12 pl-10 pr-10 gap-x-10">
      <button
        onMouseEnter={() => onHover(true)}
        className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
          currentTab === 0 ? textPrimary : textWhite
        } `}
        onClick={() => onClick(0)}
      >
        Frontend{' '}
        <span
          className={` -ml-1 ${
            currentTab === 0 ? textWhite : groupTextPrimary
          }`}
        >
          .
        </span>
        <div
          className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
            currentTab === 0 ? borderPrimary : borderTransparent
          } group-hover:border-primary`}
        ></div>
      </button>

      <button
        onMouseEnter={() => onHover(true)}
        className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
          currentTab === 1 ? textPrimary : textWhite
        } `}
        onClick={() => onClick(1)}
      >
        Backend{' '}
        <span
          className={` -ml-1 ${
            currentTab === 1 ? textWhite : groupTextPrimary
          }`}
        >
          .
        </span>
        <div
          className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
            currentTab === 1 ? borderPrimary : borderTransparent
          } group-hover:border-primary`}
        ></div>
      </button>
      <button
        onMouseEnter={() => onHover(true)}
        className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
          currentTab === 2 ? textPrimary : textWhite
        } `}
        onClick={() => onClick(2)}
      >
        Databases{' '}
        <span
          className={` -ml-1 ${
            currentTab === 2 ? textWhite : groupTextPrimary
          }`}
        >
          .
        </span>
        <div
          className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
            currentTab === 2 ? borderPrimary : borderTransparent
          } group-hover:border-primary`}
        ></div>
      </button>
      <button
        onMouseEnter={() => onHover(true)}
        className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
          currentTab === 3 ? textPrimary : textWhite
        } `}
        onClick={() => onClick(3)}
      >
        CMS
        <span className={`${currentTab === 3 ? textWhite : groupTextPrimary}`}>
          .
        </span>
        <div
          className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
            currentTab === 3 ? borderPrimary : borderTransparent
          } group-hover:border-primary`}
        ></div>
      </button>
      <button
        onMouseEnter={() => onHover(true)}
        className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
          currentTab === 4 ? textPrimary : textWhite
        } `}
        onClick={() => onClick(4)}
      >
        Mobile Applications{' '}
        <span
          className={` -ml-1 ${
            currentTab === 4 ? textWhite : groupTextPrimary
          }`}
        >
          .
        </span>
        <div
          className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
            currentTab === 4 ? borderPrimary : borderTransparent
          } group-hover:border-primary`}
        ></div>
      </button>
      <button
        onMouseEnter={() => onHover(true)}
        className={`group pb-4 font-gilroy md:text-xl font-semibold text-white hover:text-primary ${
          currentTab === 5 ? textPrimary : textWhite
        } `}
        onClick={() => onClick(5)}
      >
        UI/UX{' '}
        <span
          className={` -ml-1 ${
            currentTab === 5 ? textWhite : groupTextPrimary
          }`}
        >
          .
        </span>
        <div
          className={`border-r-0 border-l-0 border-t-0 border-b-2 w-3/12  ${
            currentTab === 5 ? borderPrimary : borderTransparent
          } group-hover:border-primary`}
        ></div>
      </button>
    </div>
  );
};
const ContentContainer = ({ currentTab, currentState }) => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lotties/techStack/drawkit-grape-animation-2-LOOP.json')
    });
  }, []);
  switch (currentTab || currentState) {
    case currentTab == 0:
      return (
        <>
          {currentState && (
            <div className="flex md:flex-row flex-col md:justify-center w-11/12 md:w-full">
              <div className="w-5/12">
                <div className="ml-28 mt-20 hidden md:block">
                  <h1 className="text-white font-gilroy">
                    Services <span className="text-primary -ml-2">.</span>
                  </h1>
                  <p className="font-gilroy text-lg pt-4 text-white font-thin w-10/12 leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl in suspendisse nibh vitae, pharetra quis mattis enim.
                  </p>
                  <div className="w-8/12 mt-16 ">
                    <div className="container" ref={container}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-6/12 justify-center md:gap-y-20 gap-y-12 md:mt-28 mt-12">
                <div className="flex gap-x-20 md:pr-0 md:pl-0 pr-10 pl-10">
                  <div className="w-40">
                    <Image src={firebase}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={mongoDb}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={noSql}></Image>
                  </div>
                </div>
                <div className="flex justify-center md:ml-10  ">
                  <div className="flex w-9/12 gap-x-20 md:pr-0 md:pl-0 pr-14 pl-14">
                    <div className="w-32 md:w-40">
                      <Image src={postgreSql}></Image>
                    </div>
                    <div className="w-32 md:w-40">
                      <Image src={Vue}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case currentTab == 1:
      return (
        <>
          {currentState && (
            <div className="flex md:flex-row flex-col md:justify-center w-11/12 md:w-full">
              <div className="w-5/12">
                <div className="ml-28 mt-20 hidden md:block">
                  <h1 className="text-white font-gilroy">
                    Services <span className="text-primary -ml-2">.</span>
                  </h1>
                  <p className="font-gilroy text-lg pt-4 text-white font-thin w-10/12 leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl in suspendisse nibhs vitae, pharetra quis mattis enim.
                  </p>
                  <div className="w-10/12 mt-16 ">
                    <div className="container" ref={container}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-6/12 justify-center md:gap-y-20 gap-y-12 md:mt-52 mt-12">
                <div className="flex gap-x-20 md:pr-0 md:pl-0 pr-10 pl-10">
                  <div className="w-40">
                    <Image src={firebase}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={mongoDb}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={noSql}></Image>
                  </div>
                </div>
                <div className="flex justify-center md:ml-10  ">
                  <div className="flex w-9/12 gap-x-20 md:pr-0 md:pl-0 pr-14 pl-14">
                    <div className="w-32 md:w-40">
                      <Image src={postgreSql}></Image>
                    </div>
                    <div className="w-32 md:w-40">
                      <Image src={Vue}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case currentTab == 2:
      return (
        <>
          {currentState && (
            <div className="flex md:flex-row flex-col md:justify-center w-11/12 md:w-full">
              <div className="w-5/12">
                <div className="ml-28 mt-20 hidden md:block">
                  <h1 className="text-white font-gilroy">
                    Services <span className="text-primary -ml-2">.</span>
                  </h1>
                  <p className="font-gilroy text-lg pt-4 text-white font-thin w-10/12 leading-10">
                    Lorem ipsum dolors sit amet, consectetur adipiscing elit.
                    Nisl in suspendisse nibhs vitae, pharetra quis mattis enim.
                  </p>
                  <div className="w-8/12 mt-16 ">
                    <div className="container" ref={container}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-6/12 justify-center md:gap-y-20 gap-y-12 md:mt-52 mt-12">
                <div className="flex gap-x-20 md:pr-0 md:pl-0 pr-10 pl-10">
                  <div className="w-40">
                    <Image src={firebase}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={mongoDb}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={noSql}></Image>
                  </div>
                </div>
                <div className="flex justify-center md:ml-10  ">
                  <div className="flex w-9/12 gap-x-20 md:pr-0 md:pl-0 pr-14 pl-14">
                    <div className="w-32 md:w-40">
                      <Image src={postgreSql}></Image>
                    </div>
                    <div className="w-32 md:w-40">
                      <Image src={Vue}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case currentTab == 3:
      return (
        <>
          {currentState && (
            <div className="flex md:flex-row flex-col md:justify-center w-11/12 md:w-full">
              <div className="w-5/12">
                <div className="ml-28 mt-20 hidden md:block">
                  <h1 className="text-white font-gilroy">
                    Services <span className="text-primary -ml-2">.</span>
                  </h1>
                  <p className="font-gilroy text-lg pt-4 text-white font-thin w-10/12 leading-10">
                    Lorem ipsum dolor sit amet, consecteturs adipiscing elit.
                    Nisl in suspendisse nibhs vitaew, pharetra quis mattis enim.
                  </p>
                  <div className="w-8/12 mt-16 ">
                    <div className="container" ref={container}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-6/12 justify-center md:gap-y-20 gap-y-12 md:mt-52 mt-12">
                <div className="flex gap-x-20 md:pr-0 md:pl-0 pr-10 pl-10">
                  <div className="w-40">
                    <Image src={firebase}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={mongoDb}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={noSql}></Image>
                  </div>
                </div>
                <div className="flex justify-center md:ml-10  ">
                  <div className="flex w-9/12 gap-x-20 md:pr-0 md:pl-0 pr-14 pl-14">
                    <div className="w-32 md:w-40">
                      <Image src={postgreSql}></Image>
                    </div>
                    <div className="w-32 md:w-40">
                      <Image src={Vue}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case currentTab == 4:
      return (
        <>
          {currentState && (
            <div className="flex md:flex-row flex-col md:justify-center w-11/12 md:w-full">
              <div className="w-5/12">
                <div className="ml-28 mt-20 hidden md:block">
                  <h1 className="text-white font-gilroy">
                    Services <span className="text-primary -ml-2">.</span>
                  </h1>
                  <p className="font-gilroy text-lg pt-4 text-white font-thin w-10/12 leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl in suspendisse nibhs vitae, pharetras quis mattis enim.
                  </p>
                  <div className="w-8/12 mt-16 ">
                    <div className="container" ref={container}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-6/12 justify-center md:gap-y-20 gap-y-12 md:mt-52 mt-12">
                <div className="flex gap-x-20 md:pr-0 md:pl-0 pr-10 pl-10">
                  <div className="w-40">
                    <Image src={firebase}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={mongoDb}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={noSql}></Image>
                  </div>
                </div>
                <div className="flex justify-center md:ml-10  ">
                  <div className="flex w-9/12 gap-x-20 md:pr-0 md:pl-0 pr-14 pl-14">
                    <div className="w-32 md:w-40">
                      <Image src={postgreSql}></Image>
                    </div>
                    <div className="w-32 md:w-40">
                      <Image src={Vue}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );

    default:
      return (
        <>
          {currentState && (
            <div className="flex md:flex-row flex-col md:justify-center w-11/12 md:w-full">
              <div className="w-5/12">
                <div className="ml-28 mt-20 hidden md:block">
                  <h1 className="text-white font-gilroy">
                    Services <span className="text-primary -ml-2">.</span>
                  </h1>
                  <p className="font-gilroy text-lg pt-4 text-white font-thin w-10/12 leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl in suspendisses nibh vitae, pharetra quis mattis enim.
                  </p>
                  <div className="w-8/12 mt-16 ">
                    <div className="container" ref={container}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-6/12 justify-center md:gap-y-20 gap-y-12 md:mt-52 mt-12">
                <div className="flex gap-x-20 md:pr-0 md:pl-0 pr-10 pl-10">
                  <div className="w-40">
                    <Image src={firebase}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={mongoDb}></Image>
                  </div>
                  <div className="w-40">
                    <Image src={noSql}></Image>
                  </div>
                </div>
                <div className="flex justify-center md:ml-10  ">
                  <div className="flex w-9/12 gap-x-20 md:pr-0 md:pl-0 pr-14 pl-14">
                    <div className="w-32 md:w-40">
                      <Image src={postgreSql}></Image>
                    </div>
                    <div className="w-32 md:w-40">
                      <Image src={Vue}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
  }
};
const Stack = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <div className="flex justify-center">
        <ButtonContainer
          onClick={setCurrentTab}
          onHover={setIsShown}
          currentTab={currentTab}
        />
      </div>
      <div className="flex justify-center">
        <ContentContainer currentTab={currentTab} currentState={isShown} />
        <div className="hidden md:block">
          {' '}
          <div className="flex flex-col justify-center mt-72">
            <button
              className="group  hover:bg-white rounded-lg p-5"
              onClick={() => setCurrentTab(Math.abs(currentTab + 1) % 6)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"
                  className="fill-current text-white group-hover:text-black"
                />
              </svg>
            </button>
            <button
              className="group hover:bg-white rounded-lg p-5 mt-4"
              onClick={() => setCurrentTab(Math.abs(currentTab - 1) % 6)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z"
                  className="fill-current text-white group-hover:text-black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stack;
