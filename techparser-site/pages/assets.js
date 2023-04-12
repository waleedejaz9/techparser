import Image from 'next/image';
import { React, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import Layout from '../components/Layouts';
import users from '../public/users.svg';
import chain from '../public/chain.svg';
import electron from '../public/electron.svg';
import ladybug from '../public/ladybug.svg';
import tv from '../public/tv.svg';
import books from '../public/books.svg';
import doubleCheck from '../public/doubleCheck.svg';
import quoteOpen from '../public/quoteOpen.svg';
import quoteClose from '../public/quoteClose.svg';
import ideate from '../public/ideate.svg';
import design from '../public/design.svg';
import develope from '../public/develope.svg';
import deploy from '../public/deploy.svg';
import Line3 from '../public/Line3.svg';
import Line1 from '../public/Line1.svg';
import Line2 from '../public/Line2.svg';
import triangle from '../public/triangle.svg';
import logo from '../public/logo.svg';
import heroImg from '../public/heroImg.svg';
import eclipse from '../public/eclipse.svg';
import arrowRight from '../public/arrowright.svg';
import rightParkingArrow from '../public/rightParkingArrow.svg';
import teacher from '../public/teacher.svg';
import Vue from '../public/Vue.svg';
import mongoDb from '../public/mongoDb.svg';
import firebase from '../public/firebase.svg';
import noSql from '../public/noSQL.svg';
import postgreSql from '../public/postgreSql.svg';
import testimonial from '../public/testimonial.svg';
import doubleQuotes from '../public/doubleQuotes.svg';
import ceo from '../public/ceo.svg';
import dotted from '../public/dotted.svg';
import darkBg from '../public/darkBg.svg';
import Chat from '../public/chat.svg';
import ideas from '../public/ideas.svg';
import workSpaceMobile from '../public/workSpaceMobile.svg';
import workStation from '../public/workStation.svg';
import aboutAnimation from '../public/aboutUs/aboutAnimation.svg';
import adaptation from '../public/aboutUs/adaptation.svg';
import emojiMask from '../public/aboutUs/emojiMask.svg';
import heropic from '../public/aboutUs/heroPic.svg';
import integration from '../public/aboutUs/integration.svg';
import missionBg from '../public/aboutUs/missionBg.svg';
import pencilAnimation from '../public/aboutUs/pencilAnimation.svg';
import policyBg from '../public/aboutUs/policyBg.svg';
import quoteclose from '../public/aboutUs/quoteClose.svg';
import quoteopen from '../public/aboutUs/quoteOpen.svg';
import responsibility from '../public/aboutUs/responsibility.svg';
import sadEmoji from '../public/aboutUs/sadEmoji.svg';
import secretFile from '../public/aboutUs/secretFile.svg';
import timeManagement from '../public/aboutUs/timeManagement.svg';
import transparency from '../public/aboutUs/transparency.svg';
import xNegativeScale from '../public/aboutUs/xNegativeScale.svg';
import xPositiveScale from '../public/aboutUs/xPositiveScale.svg';

export default function Assets() {
  const latestIdeas = useRef(null);
  const chat = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/techStack/drawkit-grape-animation-2-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/aboutUsPolicy/drawkit-grape-animation-8-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: latestIdeas.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/haveAnyProject/drawkit-grape-animation-3-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/businessGoal/drawkit-grape-animation-4-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/Grape/drawkit-grape-animation-1-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/Animation05/drawkit-grape-animation-5-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/Animation06/drawkit-grape-animation-6-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/Animation07/drawkit-grape-animation-7-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/Animation09/drawkit-grape-animation-9-LOOP.json')
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: chat.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lotties/Animation10/drawkit-grape-animation-10-LOOP.json')
    });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <h2 className="text-center">animations </h2>
        <div className="latestIdeasDiv w-1/12" ref={latestIdeas}></div>
        <div className="container w-1/12" ref={chat}></div>
        <div className="container w-1/12" ref={container}></div>
        <div className="latestIdeasDiv w-1/12" ref={latestIdeas}></div>
        <h2 className="text-center">portfolioPage assets</h2>
        <div
          className="bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(/portfolio/heroBg.svg)`
          }}
        >
          <div className="flex justify">
            <img
              src="/portfolio/heroImg.png"
              alt="article"
              className="w-3/12 p-4"
            ></img>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20">
          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/portfolio/dealsBg.svg)`
            }}
          >
            <div className="flex justify">
              <img
                src="/portfolio/deals.png"
                alt="article"
                className="w-3/12 p-4"
              ></img>
            </div>
          </div>

          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/portfolio/upComingEventsBg.svg)`
            }}
          >
            <div className="flex justify">
              <img
                src="/portfolio/upComingEvents.png"
                alt="article"
                className="w-3/12 p-4"
              ></img>
            </div>
          </div>

          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/portfolio/selectProfileBg.svg)`
            }}
          >
            <div className="flex justify">
              <img
                src="/portfolio/selectProject.png"
                alt="article"
                className="w-3/12 p-4"
              ></img>
            </div>
          </div>

          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/portfolio/mapsBg.svg)`
            }}
          >
            <div className="flex justify">
              <img
                src="/portfolio/maps.png"
                alt="article"
                className="w-3/12 p-4"
              ></img>
            </div>
          </div>
        </div>
        <h2 className="text-center">contact us assets</h2>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              src="/contactUs/emojiFallLine.png"
              alt="article"
              className="w-1/12"
            ></img>
          </div>

          <p className="text-center">
            i applied bg so that you can view it easily
          </p>
          <div className="flex justify-center">
            <img
              src="/contactUs/ServicesBg.png"
              alt="article"
              className="w-1/2 bg-black"
            ></img>
          </div>

          <img
            src="/contactUs/Rectangle.svg"
            alt="article"
            className="w-1/12 p-5"
          ></img>
        </div>
        <h2 className="text-center">contact us assets</h2>
        <div className="flex flex-col justify-center">
          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/carriers/heroBg.png)`
            }}
          >
            <div className="flex justify-center">
              <img
                src="/carriers/hero.png"
                alt="article"
                className="w-5/12"
              ></img>
            </div>
          </div>
          <p>
            bg is there but its opacity is very low. can be seen in dark color
          </p>
          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/carriers/amigosBg.svg)`
            }}
          >
            <div className="flex justify-center">
              <img
                src="/carriers/amigos.svg"
                alt="article"
                className="w-4/12"
              ></img>
            </div>
          </div>
        </div>
        <h1 className="text-black text-2xl font-bold text-center p-2">
          BLOG Read Assets
        </h1>
        <div className="flex flex-col justify-center">
          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/BlogRead/articleBg.svg)`
            }}
          >
            <div className="flex justify-center">
              <img
                src="/BlogRead/Article Image.png"
                alt="article"
                className="w-1/2"
              ></img>
            </div>
          </div>
          <h1 className="text-black text-2xl font-bold text-center p-2">
            technology paragraph bg
          </h1>

          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/BlogRead/articleBg.svg)`
            }}
          >
            <div className="flex justify-center">
              <img
                src="/BlogRead/dangerousTechBg.png"
                alt="article"
                className="w-1/2"
              ></img>
            </div>
          </div>
          <h1 className="text-black text-2xl font-bold text-center p-2">
            tech Ahmed
          </h1>
          <img
            src="/BlogRead/Profile Picture.png "
            alt="article"
            className="w-2/12"
          ></img>

          <div className="grid grid-cols-3 justify-items-center pt-16">
            <img
              src="/BlogRead/flowers.svg"
              alt="article"
              className="w-1/2"
            ></img>
            <img
              src="/BlogRead/nvidia.png"
              alt="article"
              className="w-1/2"
            ></img>
          </div>
        </div>
        <h1 className="text-black text-2xl font-bold text-center p-2">
          blog main Assets
        </h1>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              src="/BlogMain/blogHeroImg.png"
              alt="article"
              className="w-1/12"
            ></img>
          </div>
          <img
            src="/BlogMain/learnMoreRightArrow.svg"
            alt="article"
            className="w-1/12 "
          ></img>

          <div className="flex justify-center pt-20">
            <img
              src="/BlogMain/flowers.png"
              alt="article"
              className="w-3/12 bg-black"
            ></img>
          </div>
          <div className="flex justify-center pt-20">
            <img
              src="/BlogMain/nvidia.png"
              alt="article"
              className="w-3/12 bg-black"
            ></img>
          </div>
        </div>
        <h1 className="text-black text-2xl font-bold text-center p-2">
          portfolio Read Assets
        </h1>
        <div className="flex flex-col justify-center">
          <div
            className="bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/carriers/heroBg.png)`
            }}
          >
            <div className="flex justify-center">
              <img
                src="/ourServices/heroImg.png"
                alt="article"
                className="w-1/2"
              ></img>
            </div>
          </div>

          <img
            src="/ourServices/quoteOpen.svg"
            alt="article"
            className="w-1/12 p-5"
          ></img>
          <img
            src="/ourServices/quoteClose.svg"
            alt="article"
            className="w-1/12 p-5"
          ></img>

          <img
            src="/ourServices/servicesBg.png"
            alt="article"
            className="p-5 w-3/12"
          ></img>
          <img
            src="/ourServices/quoteClose.svg"
            alt="article"
            className="w-1/12 p-5"
          ></img>
          <img
            src="/ourServices/Rectangle.svg"
            alt="article"
            className="w-1/12 "
          ></img>
          <img
            src="/ourServices/customSoftwareDevelopmentServices.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/developmentServices.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/blueCircle.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/services.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/roiArchitecture.png"
            alt="article"
            className="w-6/12  p-5"
          ></img>
          <img
            src="/ourServices/scaleXPositive.png"
            alt="article"
            className="w-2/12  p-5"
          ></img>
          <img
            src="/ourServices/rapidApplicationAgile.png"
            alt="article"
            className="w-6/12  p-5"
          ></img>
          <img
            src="/ourServices/microservicesArchitect.svg"
            alt="article"
            className="w-6/12  p-5"
          ></img>
          <img
            src="/ourServices/architectureGoals.png"
            alt="article"
            className="w-6/12  p-5"
          ></img>

          <img
            src="/ourServices/roiDotedLine.svg"
            alt="article"
            className="w-3/12  p-5"
          ></img>
          <img
            src="/ourServices/rapidAgileDotedLine.svg"
            alt="article"
            className="w-3/12  p-5"
          ></img>

          <img
            src="/ourServices/microservicesDotedLine.svg"
            alt="article"
            className="w-3/12  p-5"
          ></img>
          <img
            src="/ourServices/feedBack.png"
            alt="article"
            className="w-3/12  p-5"
          ></img>
          <img
            src="/ourServices/ideate.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/design.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/develop.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/deploy.svg"
            alt="article"
            className="w-1/12  p-5"
          ></img>
          <img
            src="/ourServices/portfolioProductsBg.svg"
            alt="article"
            className="w-6/12  p-5"
          ></img>
          <img
            src="/ourServices/portFolioProductSliderImg.svg"
            alt="article"
            className="w-3/12  p-5"
          ></img>
        </div>
        <h1 className="text-center">Home Page</h1>
        <div className="pl-14">
          <div className="w-36  bg-black">
            <Image src={logo}></Image>
          </div>
        </div>
        <div className="w-48 2xl:w-64 pt-4 md:-ml-8 2xl:-ml-11 hidden md:block ">
          <Image src={eclipse}></Image>
        </div>
        <p className="md:text-white  md:text-4xl 2xl:text-5xl text-2xl hero-develop-margin md:pl-0 pl-10 md:pr-1 font-gilroy font-bold">
          Develop
        </p>
        <div className="md:w-full w-11/12 mt-44 2xl:mt-80 2xl:-mr-52">
          <Image src={heroImg}></Image>
        </div>
        <div className="w-12 flex items-center pl-3">
          <Image src={arrowRight}></Image>
        </div>
        <Image src={rightParkingArrow}></Image>
        <div className="md:w-9/12 w-11/12 md:mt-40 mt-4 md:-ml-20 ml-5">
          <Image src={teacher}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={ideate}></Image>
        </div>
        <div className="pl-4 pt-7 hidden md:block">
          <Image src={Line3}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={design}></Image>
        </div>
        <div className=" pl-4 hidden md:block">
          <Image src={Line1}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={develope}></Image>
        </div>
        <div className="pl-4 pt-7 hidden md:block">
          <Image src={Line2}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={deploy}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={Chat}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={workSpaceMobile}></Image>
        </div>
        <div className="md:w-20 w-16">
          <Image src={workStation}></Image>
        </div>
        <div className="w-32 md:w-40">
          <Image src={postgreSql}></Image>
        </div>
        <div className="w-32 md:w-40">
          <Image src={Vue}></Image>
        </div>
        <div className="w-40">
          <Image src={firebase}></Image>
        </div>
        <div className="w-40">
          <Image src={mongoDb}></Image>
        </div>
        <div className="w-40">
          <Image src={noSql}></Image>
        </div>
        <div className="w-40">
          <Image src={users}></Image>
        </div>
        <div className="w-40">
          <Image src={tv}></Image>
        </div>
        <div className="w-40">
          <Image src={books}></Image>
        </div>
        <div className="w-6/12 pt-14">
          <Image src={electron}></Image>
        </div>
        <div className="w-6/12 pt-14">
          <Image src={chain}></Image>
        </div>
        <div className="w-6/12 pt-14">
          <Image src={ladybug}></Image>
        </div>
        <div className="w-6/12 pt-14">
          <Image src={doubleCheck}></Image>
        </div>
        <div className="md:w-8 w-10 mt-3 md:-mr-1 -mr-2 ">
          <Image src={quoteOpen}></Image>
        </div>
        <div className="md:w-8 w-10 pt-2 ">
          <Image src={quoteClose}></Image>
        </div>
        <div className="w-10 pt-24 ">
          <Image src={doubleQuotes} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={testimonial} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={ceo} alt="clientProfile"></Image>
        </div>
        <div className="flex pt-5 md:ml-28 md:pl-6 2xl:ml-14 2xl:pl-36">
          <Image
            src="/leftarrow.svg"
            alt="Picture of the author"
            width={16}
            height={16}
          />
          <p className="font-gilroy text-primary text-2xl pl-3">Read all</p>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={dotted} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={triangle} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={darkBg} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={ideas} alt="clientProfile"></Image>
        </div>
        <h1 className="text-center">About Us</h1>
        <div className="w-40">
          <Image src={aboutAnimation}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={emojiMask}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={adaptation}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={heropic}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={integration}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={missionBg}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={policyBg}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={quoteclose}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={quoteopen}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={pencilAnimation}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={responsibility}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={sadEmoji}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={secretFile}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={timeManagement}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={transparency}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={xNegativeScale}></Image>
        </div>
        ;
        <div className="w-40">
          <Image src={xPositiveScale}></Image>
        </div>
        ;
        <div className="w-1/2 pt-24 ">
          <Image src={triangle} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={ceo} alt="clientProfile"></Image>
        </div>
        <div className="w-10 pt-24 ">
          <Image src={doubleQuotes} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={testimonial} alt="clientProfile"></Image>
        </div>
        <div className="w-1/2 pt-24 ">
          <Image src={darkBg} alt="clientProfile"></Image>
        </div>
      </div>
    </Layout>
  );
}
