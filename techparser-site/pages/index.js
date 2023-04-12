import Image from 'next/image';
import { React, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import Layout from '../components/Layouts';
import Container from '../components/Container';
import Button from '../components/Button';
import UnderlineDateText from '../components/UnderlineDateText';
import CustomSlider from '../components/CustomSlider';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Stack from '../components/Stack';
import CardView from '../components/cardView';
import ArrowButton from '../components/ArrowButton';
import Header from '../components/Header';
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
import bioDataItems from '../data';
import logo from '../public/logo.svg';
import heroImg from '../public/heroImg.svg';
import TpDrawer from '../components/Drawer';
import eclipse from '../public/eclipse.svg';

export default function Home() {
  const latestIdeas = useRef(null);
  const chat = useRef(null);
  const container = useRef(null);
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
  return (
    <Layout>
      <div className="bg-hero-bg bg-cover w-full bg-no-repeat md:min-h-800 4xl:bg-top-9 4xl:min-h-1300 5xl:min-h-1400 5xl:bg-top-10 6xl:bg-top-11 3xl:bg-top-8 2xl:min-h-1130 pt-16 md:bg-top-6 bg-top-7">
        <div className="flex justify-center">
          <Container>
            <div className="flex justify-between md:ml-10">
              <div className="flex justify-between w-6/12">
                <div className="pl-14">
                  <div className="w-36">
                    <Image src={logo}></Image>
                  </div>
                </div>

                <div className="pt-2 pr-12 hidden md:block">
                  <Header
                    currentMenuItem="Home"
                    customClassName="text-white"
                  ></Header>
                </div>
              </div>
              <div className="mr-32 hidden md:block">
                <Button
                  customClassName="bg-primary w-64 font-gilroy font-medium text-white text-2xl rounded-xl p-3"
                  text="Get a free estimate"
                ></Button>
              </div>
              <div className="md:hidden blocks">
                <TpDrawer></TpDrawer>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="opacity-30 hidden md:block w-11/12"></hr>
            </div>
            <div className="flex flex-col-reverse md:flex-row ">
              <div className="md:ml-24 2xl:mt-32">
                <p className="text-primary font-gilroy md:text-xl 2xl:text-2xl text-lg pt-36 md:pl-0 pl-10">
                  SOFTWARE SOLUTIONS
                </p>
                <div className="flex pl-10 md:pl-0">
                  <p className="md:text-white md:text-4xl 2xl:text-5xl text-2xl pt-3 font-gilroy font-bold">
                    Leading Companies{' '}
                  </p>
                  <div className="pl-1">
                    <div className="border border-primary border-r-0 border-l-0 border-t-0 border-b-8">
                      <p className="md:text-white md:text-4xl 2xl:text-5xl text-2xl pt-3 font-gilroy font-bold md:-mb-6 2xl:-mb-7 -mb-4 p-1">
                        Trust Us
                      </p>
                    </div>
                  </div>
                  <p className="md:text-white md:text-4xl text-2xl 2xl:text-5xl pt-3 font-gilroy font-bold">
                    To
                  </p>
                </div>
                <div className="flex md:-mt-6">
                  <div>
                    <div className="w-48 2xl:w-64 pt-4 md:-ml-8 2xl:-ml-11 hidden md:block ">
                      <Image src={eclipse}></Image>
                    </div>
                    <p className="md:text-white md:text-4xl 2xl:text-5xl text-2xl hero-develop-margin md:pl-0 pl-10 md:pr-1 font-gilroy font-bold">
                      Develop
                    </p>
                  </div>
                  <p className="md:text-white md:text-4xl text-2xl 2xl:text-5xl md:pt-8 pt-2 font-gilroy font-bold pl-1">
                    Software{' '}
                    <span className="text-primary -ml-1 md:-ml-3">.</span>
                  </p>
                </div>
                <p className="text-heroLightText 2xl:text-3xl md:text-2xl text-lg pt-7 md:pt-16 md:pl-1 pl-10 pr-1 font-gilroy 2xl:w-full md:w-10/12 w-10/12">
                  We are quality-driven software house specialized in custom
                  software development using Laravel, Vue and React.
                </p>
                <div className="pt-16 md:mr-7 flex justify-center md:justify-start">
                  <ArrowButton
                    customClassName="bg-primary md:w-5/12 2xl:w-5/12 w-10/12 font-gilroy font-medium text-white text-2xl rounded-xl md:p-6 p-6 2xl:pt-5 2xl:pb-5 2xl:pr-2 2xl:pl-2 "
                    text="Get a free estimate"
                  ></ArrowButton>
                </div>
              </div>
              <div className="flex justify-center md:w-9/12 2xl:w-full">
                <div className="md:w-full w-11/12 mt-44 2xl:mt-80 2xl:-mr-52">
                  <Image src={heroImg}></Image>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="flex justify-center">
        <CustomSlider></CustomSlider>
      </div>

      <div className="flex justify-center">
        {' '}
        <Container>
          <p className="text-textDark font-gilroy font-bold md:text-4xl text-2xl mt-20 ml-8 tracking-wide">
            So what&apos;s service we provide{' '}
            <span className="text-primary -ml-2">?</span>
          </p>
          <Services></Services>
        </Container>
      </div>

      <div className="flex justify-center">
        <Container>
          <section className="flex md:justify-center pl-7 md:mt-20">
            <div className="flex md:ml-7">
              <div className="flex flex-col w-full pt-20">
                <div className="flex flex-col ">
                  <h2 className="font-gilroy md:text-4xl text-2xl text-textDark md:pl-2">
                    Our approach to reach your{' '}
                  </h2>
                  <div className="md:pt-3 pt-1">
                    <p className="bg-primary text-white font-gilroy rounded-md md:text-4xl md:w-64 w-36 text-xl text-center ">
                      business goals
                    </p>
                  </div>
                </div>
                <div className="2xl:mt-10 grid md:grid-cols-4 grid-cols-2">
                  <div className="flex flex-col">
                    <div className="flex pt-12">
                      <div className="md:w-20 w-16">
                        <Image src={ideate}></Image>
                      </div>
                      <div className="pl-4 pt-7 hidden md:block">
                        <Image src={Line3}></Image>
                      </div>
                    </div>
                    <p className="font-bold  2xl:text-lg font-gilroy pt-3">
                      Ideate
                    </p>
                    <p className="font-gilroy text-sm 2xl:text-lg md:w-9/12 w-9/12 pt-2 leading-6">
                      Turn your idea from concept to MVP
                    </p>
                  </div>
                  <div className="flex flex-col pl-3">
                    <div className="flex pt-12">
                      <div className="md:w-20 w-16">
                        <Image src={design}></Image>
                      </div>
                      <div className=" pl-4 hidden md:block">
                        <Image src={Line1}></Image>
                      </div>
                    </div>
                    <p className="font-bold font-gilroy md:pt-7 pt-3">Design</p>
                    <p className="font-gilroy text-sm md:w-9/12 w-11/12 2xl:text-lg pt-2">
                      Sketch out the product to align the user needs
                    </p>
                  </div>
                  <div className="flex flex-col pl-1 md:pl-3">
                    <div className="flex pt-12">
                      <div className="md:w-20 w-16">
                        <Image src={develope}></Image>
                      </div>
                      <div className="pl-4 pt-7 hidden md:block">
                        <Image src={Line2}></Image>
                      </div>
                    </div>
                    <p className="font-bold font-gilroy pt-4">Develop</p>
                    <p className="font-gilroy text-sm md:w-9/12 2xl:text-lg w-8/12 pt-1">
                      Convert the designs into a live application
                    </p>
                  </div>
                  <div className="flex flex-col pl-3">
                    <div className="flex pt-11">
                      <div className="md:w-20 w-16">
                        <Image src={deploy}></Image>
                      </div>
                    </div>
                    <p className="font-bold font-gilroy md:pt-6 pt-4 2xl:pt-8 ">
                      Deploy
                    </p>
                    <p className="font-gilroy text-sm pt-1 md:pt-0 md:11/12 w-10/12 2xl:text-lg ">
                      Launching the application to the market
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-5/12">
                <div className="md:-mt-24 2xl:-mt-32 md:-ml-20">
                  <div className="container" ref={chat}></div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div className="bg-textDark mt-32 md:pb-28 pb-16 md:pt-28 pt-10">
        <h1 className="text-center font-gilroy text-white text-3xl md:text-4xl font-semibold ">
          Our Tech stack<span className="text-primary">.</span>
        </h1>
        <div className="flex justify-center">
          <Container>
            <Stack></Stack>
          </Container>
        </div>
      </div>

      <div className="flex justify-center">
        <Container>
          <section className="md:mt-24 mt-12">
            <div className="flex justify-center">
              <p className="font-gilroy w-2/4 text-textDark md:w-full md:text-2xl text-2xl font-semibold text-center">
                How Development at techparser works
                <span className="text-primary">?</span>
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-center md:w-1/4 w-5/12 tracking-wide text-textLight text-xs pt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
                adipising tempor tempus
              </p>
            </div>
            <div className="pt-10 flex md:flex-row flex-col md:gap-x-28 gap-y-12 justify-center items-center">
              <CardView
                image={users}
                title="Assemble the right team"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
              adipising tempor tempus"
              />
              <CardView
                image={tv}
                title="Assemble the right team"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
              adipising tempor tempus"
              />
              <CardView
                image={books}
                title="Assemble the right team"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
              adipising tempor tempus"
              />
            </div>
            <div className="md:block hidden">
              <div className="flex justify-center">
                <div className="w-6/12 pt-14">
                  <Image src={electron}></Image>
                </div>
              </div>
            </div>
            <div className="pt-14 flex md:flex-row flex-col md:gap-x-28 gap-y-12 justify-center items-center">
              <CardView
                image={chain}
                title="Assemble the right team"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
              adipising tempor tempus"
              />
              <CardView
                image={ladybug}
                title="Assemble the right team"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
              adipising tempor tempus"
              />
              <CardView
                image={doubleCheck}
                title="Assemble the right team"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ultrices
              adipising tempor tempus"
              />
            </div>
            <div className="flex gap-x-1 justify-center pt-24 ">
              <p className="text-center text-textDark font-gilroy text-2xl font-semibold">
                techparser
              </p>
              <p className="bg-primary text-white text-2xl pr-2 pl-2 rounded font-gilroy">
                Guarantee
              </p>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex flex-row text-center justify-center">
                <div className="md:w-8 w-10 mt-3 md:-mr-1 -mr-2 ">
                  <Image src={quoteOpen}></Image>
                </div>
                <p className="pt-8 text-textLight font-gilroy md:w-4/12 w-9/12 tracking-wide leading-9 -ml-6 md:-ml-0 ">
                  we know that if the client&apos;s project launches smoothly,
                  they&apos;ill come back for more. We&apos;re{' '}
                  <span className="text-primary">willing to over-invest </span>{' '}
                  in guaranteeing results&lsquo; rather than under-invest to
                  make our financial reports look pretty in the short-run.
                </p>
              </div>
              <div className="flex flex-col text-center justify-center md:pt-10 pt-6 ">
                <div className="flex justify-center">
                  <p className="md:w-5/12 w-9/12 tracking-wider  text-textLight font-gilroy leading-9">
                    we offer a{' '}
                    <span className="text-primary">risk-free trial period</span>
                    of up to two weeks. You will only have to pay if you are
                    happy with a developer and wish to continue. if you are
                    unsatisfied, we&apos;ill refund payment
                  </p>
                </div>

                <div className="flex flex-row justify-center gap-x-2">
                  <p className=" tracking-wider  text-textLight font-gilroy leading-9">
                    {' '}
                    of fix issues on our dime.
                  </p>
                  <div className="md:w-8 w-10 pt-2 ">
                    <Image src={quoteClose}></Image>
                  </div>
                </div>
              </div>
              <p className="pt-5  text-primary text-center text-xl font-semibold font-gilroy leading-9 font-gilroy">
                CEO techparser
              </p>
            </div>
          </section>
        </Container>
      </div>

      <section className="bg-testimonial bg-cover bg-no-repeat min-h-350 2xl:min-h-470 3xl:min-h-1130 pb-10 bg-testimonial-position">
        <div className="flex justify-center">
          <Container>
            <div className="flex md:flex-row flex-col justify-center 2xl:gap-x-40">
              <div className="flex flex-col mt-56 pl-9 md:pl-0 ">
                <p className="text-primary font-semibold text-lg">
                  TESTIMONIALS
                </p>
                <h2 className="fony-gilroy md:w-8/12 w-7/12 text-2xl md:text-4xl ">
                  What people say about Us{' '}
                  <span className="text-primary -ml-2">.</span>{' '}
                </h2>
              </div>
              <div className="md:mt-40 mt-28 2xl:mt-72">
                <Testimonials bioDataItems={bioDataItems}></Testimonials>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <div className="md:bg-cover md:bg-doted-line md:bg-no-repeat w-full md:bg-top-4 2xl:bg-top-5 3xl:min-h-1400 3xl:bg-top-8 md:mt-40 mt-11 2xl:-mt-10">
        <div className="flex justify-center">
          <Container>
            <div className="hidden md:block">
              <div className="flex justify-center pt-20 pb-7 mr-48">
                <div className="w-14 h-12">
                  <Image src={triangle}></Image>
                </div>
              </div>
            </div>

            <section className="flex justify-center">
              <div className="flex justify-center md:gap-x-12 w-full md:w-9/12 flex-col-reverse md:flex-row">
                <div className="md:pt-0 pt-10 md:w-5/12 md:ml-7">
                  <hr></hr>
                  <div className="flex flex-col">
                    <UnderlineDateText
                      date="JUN  12"
                      text="How the future is crypto?"
                      textClassName="pt-5 pb-5 text-lg text-textDark font-gilroy font-semibold"
                      dateClassName="pt-5 text-xl   font-gilroy font-medium text-textLight"
                      customClassName="flex justify-center md:justify-start  gap-x-12 md:gap-x-16 pr-20 md:pl-8 "
                    />
                    <hr></hr>
                    <UnderlineDateText
                      date="MAR 2"
                      text="How Mobile App work?"
                      textClassName="pt-5 pb-5  text-lg font-gilroy font-semibold text-textDark"
                      dateClassName="pt-5 text-xl font-gilroy font-medium text-textLight"
                      customClassName="flex justify-center gap-x-12 md:gap-x-16 pr-24 md:justify-start  md:pl-8 "
                    />
                    <hr></hr>
                    <UnderlineDateText
                      date="FEB 2"
                      text="What is bigdata? its sustainability"
                      textClassName="pt-5 pb-5 pl-2 text-lg font-gilroy font-semibold text-textDark"
                      dateClassName="pt-5 text-xl font-gilroy font-medium text-textLight"
                      customClassName="flex justify-center gap-x-14 md:gap-x-16 md:justify-start md:pl-8 "
                    />
                    <hr></hr>
                  </div>

                  <div className="flex items-center pl-5 justify-center md:hidden block">
                    <p className="font-gilroy text-primary text-xl pt-5">
                      Read all
                    </p>
                  </div>
                </div>

                <div className="md:w-6/12">
                  <h2 className="font-bold text-textDark font-gilroy pt-1 text-2xl md:text-4xl text-center">
                    Read our latest ideas<span className="text-primary">.</span>
                  </h2>
                  <div className="md:block hidden ">
                    <div className="flex pt-5 md:ml-28 md:pl-6 2xl:ml-14 2xl:pl-36">
                      <Image
                        src="/leftarrow.svg"
                        alt="Picture of the author"
                        width={16}
                        height={16}
                      />
                      <p className="font-gilroy text-primary text-2xl pl-3">
                        Read all
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6">
                    <div className="w-96  hidden md:block">
                      <div className="latestIdeasDiv" ref={latestIdeas}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>

        {/* have any projects on mind  */}
        <div className="flex justify-center">
          <Container>
            <section className="flex justify-center md:mb-24 md:pt-10 mt-20">
              <div className="md:w-8/12 w-full md:pt-28 pt-16 pb-24 bg-action-img md:bg-no-repeat bg-cover bg-center text-center md:rounded-5xl">
                {' '}
                <h2 className="text-white font-gilroy font-medium text-center text-lg md:text-3xl">
                  Have any project on mind? <br></br>
                  Lets work together
                  <span className="text-primary font-gilroy font-medium rounded-xl">
                    .
                  </span>
                </h2>
                <div className="flex justify-center">
                  <p className="text-white font-gilroy text-tiny text-center pt-5 w-4/12 ">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit&quot;
                  </p>
                </div>
                <div className="flex justify-center mt-12">
                  <Button
                    customClassName="bg-primary w-56 p-5 rounded-md text-white md:text-base text-sm font-gilroy font-medium tracking-wide"
                    text="Connect with us"
                  ></Button>
                </div>
                <p className="text-white font-gilroy text-center text-tiny md:mt-6 mt-8 tracking-wide">
                  Or, set-up a quick meeting with their{' '}
                  <span className="text-primary text-xs">team</span> on{' '}
                  <span className="underline text-white">slack</span>
                </p>{' '}
              </div>
            </section>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
