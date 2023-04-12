import { React } from 'react';
import Image from 'next/image';

import Layout from '../components/Layouts';
import Container from '../components/Container';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import bioDataItems from '../data';
import quoteOpen from '../public/aboutUs/quoteOpen.svg';
import quoteClose from '../public/aboutUs/quoteClose.svg';
import sadEmoji from '../public/aboutUs/sadEmoji.svg';
import maskEmoji from '../public/aboutUs/emojiMask.svg';
import heroPic from '../public/aboutUs/heroPic.svg';
import xPositiveScale from '../public/aboutUs/xPositiveScale.svg';
import xNegativeScale from '../public/aboutUs/xNegativeScale.svg';
import logo from '../public/logo.svg';
import TpDrawer from '../components/Drawer';
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <Layout>
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
                currentMenuItem="About us"
                customClassName="text-black"
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
      </Container>
      <div className="grid grid-cols-2 md:mt-60">
        <div className="flex flex-col">
          <div className="flex  ml-52">
            <div>
              <h1 className="text-primary text-6xl mt-4 font-gilroy">About</h1>
              <h1 className="text-6xl font-gilroy">techparser.</h1>
            </div>
            <div className="w-20 hidden md:block">
              <Image src={maskEmoji}></Image>
            </div>
          </div>
          <div className="w-7/12 pt-14">
            <Image src={heroPic}></Image>
          </div>
        </div>
        <div className="flex flex-col -ml-20">
          <h1 className="font-gilroy text-primary -mt-6 ml-36 text-5xl">
            Innovate <span className="text-black -ml-2 pr-2">.</span>
            Scale <span className="text-black -ml-2 pr-2">.</span>
            Grow <span className="text-black -ml-2 pr-2">.</span>
          </h1>
          <div className="ml-56 -mt-32 w-6/12 pl-4">
            <Image src={xNegativeScale}></Image>
          </div>
          <p className="md:w-7/12 ml-14 -mt-80 tracking-wide md:text-xl font-gilroy text-textLight leading-10">
            techparser is a full service{' '}
            <span className="text-primary">technology company</span>, that
            synchronizes people, processes and technology in the smartest way
            possible. Our global clientele ranges from startups to growth staged
            companies to fortune{' '}
            <span className="text-primary">500 companies</span>, and we not only
            help them grow but also make sure that the implementation of our
            technology solutions is seamless, pain-free and result driven.
            <span className="text-primary"> Over the past 11 years</span>,
            techparser has matured from a narrowly-focused technology company to
            a well-established technology hub with a solid team of programming
            and <span className="text-primary">technology experts</span>{' '}
            delivering impressive results to many happy clients worldwide.
          </p>
          <div className=" -mt-64 w-6/12 pr-28 -ml-2 ">
            <Image src={xPositiveScale}></Image>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:-mt-80 ">
        <Container>
          {' '}
          <div className="flex justify-center md:ml-80 sm:ml-20 xs:ml-20 mt-10">
            <div className="flex justify-between md:w-8/12 w-11/12">
              <div className="md:w-36 sm:w-16">
                <Image src={sadEmoji}></Image>
              </div>
              <div className="flex md:mt-14 mt-10 md:ml-0 ml-20">
                <h1 className="text-center text-primary font-gilroy pl-1">
                  Our
                </h1>
                <div className="md:ml-8 ml-4">
                  <div className="flex justify-end">
                    <div className="border border-primary border-r-0 border-l-0 border-t-0 md:border-b-8 border-b-4 md:w-48 w-28 flex justify-end md:pr-20 pr-9">
                      <p className=" md:text-4xl 2xl:text-5xl text-2xl font-gilroy font-bold md:-mb-5 -mb-4 pl-7 md:w-96">
                        Mission
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>{' '}
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex md:justify-center">
            <div className="w-5/12 md:ml-20 ml-6">
              <div className="md:w-10 w-7">
                <Image src={quoteOpen}></Image>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center">
              {' '}
              <p className="md:text-xl text-base sm:text-sm font-gilroy tracking-wide xs:tracking-wide text-textLight md:w-4/12 xs:w-11/12 sm:w-10/12 pl-3 -mt-3 leading-10">
                Our mission is to continue being the Artisan of technology to
                help businesses enjoy greater success. Our unique and
                comprehensive approach towards technology is to use it as a
                precision tool that can be powerfully effective with the
                potential to bring state-of-the-art development, global business
                intelligence, implementation and consulting into your business.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="md:w-10 w-7 -mt-7 -ml-36 md:-ml-0 xs:ml-28 sm:-ml-32">
                <Image src={quoteClose}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {' '}
        <Container>
          <div className="flex md:justify-start md:ml-40 md:mt-20 mt-8">
            <div className="md:ml-0 ml-5">
              <div className="flex justify-end">
                <div className="border border-primary border-r-0 border-l-0 border-t-0 md:border-b-8 border-b-4 md:w-28 w-20  md:pr-5 pr-24">
                  <p className=" md:text-4xl 2xl:text-5xl text-2xl font-gilroy font-bold md:-mb-5 -mb-2 md:pl-12 pl-10 md:w-96">
                    Our
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-center text-primary font-gilroy md:ml-2 -ml-2">
              Vision
            </h1>
          </div>
        </Container>
      </div>
      <div className="flex justify-center mt-11">
        <Container>
          <div className="md:hidden block">
            <div className="flex justify-center md:mt-10 ">
              <div className="flex flex-col">
                <div className="w-7 ml-5">
                  <Image src={quoteOpen}></Image>
                </div>

                <div className="flex justify-center">
                  <p className="text-base font-gilroy font-thin text-textLight w-10/12 pl-2 pt-3 leading-8 -mt-5">
                    To be a globally respected corporation that provides
                    best-of-breed business solutions, leveraging technology,
                    delivered by best-in-class people.
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="w-7 -mt-3 mr-20">
                    <Image src={quoteClose}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="hidden md:block">
        <div className="flex md:ml-72">
          <div className="w-10 ">
            <Image src={quoteOpen}></Image>
          </div>
          <div className="flex flex-col">
            <p className="md:text-xl text-base font-gilroy font-thin text-textLight  pl-3 pt-3 leading-10">
              To be a globally respected corporation that provides best-of-breed
              business solutions, leveraging
            </p>
            <div className="flex pl-3">
              <p className="md:text-xl text-base font-gilroy font-thin text-textLight md:w-6/12  leading-10">
                {' '}
                technology, delivered by best-in-class people.
              </p>
              <div className="w-10 md:-ml-6 mt-3">
                <Image src={quoteClose}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-center justify-end mr-6 md:mt-40 mt-10">
        <h1 className="text-center text-primary font-gilroy pl-1">Our Core</h1>

        <div className="md:ml-3 ml-2">
          <div className="flex justify-end">
            <div className="border border-primary border-r-0 border-l-0 border-t-0 md:border-b-8 border-b-4 md:w-48 w-28 flex justify-end md:pr-20 pr-9">
              <p className=" md:text-4xl 2xl:text-5xl text-2xl font-gilroy font-bold md:-mb-5 -mb-4 pl-7 md:w-96">
                Values
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block mt-7">
        <div className="flex flex-col">
          <div className="flex sm:ml-8 xs:ml-6">
            {' '}
            <div className="w-6">
              <Image src={quoteOpen}></Image>
            </div>
          </div>
          <div className="flex justify-center -mt-4 ">
            <p className="text-base font-gilroy tracking-wide font-thin text-textLight sm:w-9/12 xs:w-9/12 leading-7">
              In order to ensure you get the best experience and results--we
              actively support your team and provide continuous support even
              after the project is finished. We love what we do and we work hard
              to make sure that our passion, skill and expertise is in every
              project we complete.
            </p>
          </div>
          <div className="flex justify-end xs:mr-9 sm:mr-11 -mt-3">
            {' '}
            <div className=" w-7">
              <Image src={quoteClose}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {' '}
        <Container>
          <div className="hidden md:block">
            <div className="flex md:ml-48">
              <div className="w-10 ">
                <Image src={quoteOpen}></Image>
              </div>
              <div className="flex flex-col">
                <p className="md:text-xl text-base  font-gilroy font-thin text-textLight core-values pl-3 pt-3 leading-10">
                  In order to ensure you get the best experience and results--we
                  actively support your team and provide continuous support even
                  after the project is finished. We love what we do and we work
                  hard to make
                </p>
                <div className="flex pl-3">
                  <p className="md:text-xl text-base font-gilroy font-thin text-textLight md:w-5/12  leading-10">
                    {' '}
                    sure that our passion, skill and expertise is in every
                    project we complete.
                  </p>
                  <div className="w-10 md:-ml-14 mt-3">
                    <Image src={quoteClose}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="flex justify-center mt-32">
        <Container>
          <div className="flex flex-col gap-y-14">
            <div className="flex justify-center">
              <div className="w-10/12">
                <div className="flex justify-center md:flex-row flex-col md:gap-x-12 gap-y-12">
                  <AboutCardView
                    image={eclipse}
                    cardViewClassName="pb-20 border-primaryLight border-2 rounded-xl md:w-9/12 shadow-lg pt-11  font-gilroy text-center"
                    title="Product Quality"
                    titleClassName="font-gilroy pl-7 pt-3 text-xl"
                    descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-9/12 pl-3 leading-10"
                    description="We entitle ourselves to provide the highest degree of quality in every solution, product, service and endeavor of our company. Excellence and maintaining high quality is our prime mission."
                  ></AboutCardView>
                  <AboutCardView
                    image={eclipse}
                    cardViewClassName="pb-12 border-primaryLight border-2 rounded-xl md:w-9/12 shadow-lg pt-11  font-gilroy text-center"
                    title="Integrity"
                    titleClassName="font-gilroy pl-7 pt-3 text-xl"
                    descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-10/12 pl-3 leading-10"
                    description="We are loyal and committed, adhere to the organization’s rules and policies. We address conflict of interests peacefully, communicate openly, and welcome diversity. We compromise personal benefits for organization’s good and do what is expected of us even if it takes going an extra mile."
                  ></AboutCardView>
                  <AboutCardView
                    image={eclipse}
                    cardViewClassName="pb-20 border-primaryLight border-2 rounded-xl md:w-9/12 shadow-lg pt-11  font-gilroy text-center"
                    title="Confidentiality"
                    titleClassName="font-gilroy pl-7 pt-3 text-xl"
                    descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-9/12 pl-3 leading-10"
                    description="We believe in respecting the confidential information entrusted by clients and candidates in accordance with the contractual agreements."
                  ></AboutCardView>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="w-10/12">
                <div className="flex justify-center  md:flex-row flex-col md:gap-x-12 gap-y-12">
                  <AboutCardView
                    cardViewClassName="pb-32 border-primaryLight border-2 rounded-xl md:w-9/12 shadow-lg pt-11  font-gilroy text-center"
                    image={eclipse}
                    title="Transparency"
                    titleClassName="font-gilroy pl-7 text-xl"
                    descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-9/12 pl-3 leading-10"
                    description="We are transparent about our business practice and dealings with all stakeholders. We make clear and open policies and make sure to put everything on the table for our client before a contract is signed."
                  ></AboutCardView>
                  <AboutCardView
                    cardViewClassName="pb-32 border-primaryLight border-2 rounded-xl md:w-9/12 shadow-lg pt-11  font-gilroy text-center"
                    image={eclipse}
                    title="Productivity"
                    titleClassName="font-gilroy pl-7 pt-3 text-xl"
                    descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-9/12 pl-3 leading-10"
                    description="We strive for excellence and believe in execution. We are proactive, persevering and focused. We avoid distractions and ensure maximum productivity fueled with positive reinforcements."
                  ></AboutCardView>
                  <AboutCardView
                    cardViewClassName="pb-32 border-primaryLight border-2 rounded-xl md:w-9/12 shadow-lg pt-11  font-gilroy text-center"
                    image={eclipse}
                    title="Adaptability"
                    titleClassName="font-gilroy pl-7 pt-3 text-xl"
                    descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-9/12 pl-3 leading-10"
                    description="We encourage adaptability at workplace and we are open to bring changes required by the market dynamics.We are not rigid and we steer change."
                  ></AboutCardView>
                </div>
              </div>
            </div>

            <div className="w-5/6 md:ml-36">
              <AboutCardView
                cardViewClassName="pb-32 border-primaryLight border-2 md:w-4/12 rounded-xl shadow-lg pt-11  font-gilroy text-center"
                image={eclipse}
                title="Responsibility"
                titleClassName="font-gilroy pl-7 pt-3 text-xl"
                descriptionClassName="pt-10 font-gilroy text-textLight text-left text-base w-11/12 pl-3 leading-10"
                description="We deliver our promises, endeavor to exceed expectations and own the outcomes. We are mindful of our responsibilities, embrace challenges with optimism and work passionately to iterate to success."
              ></AboutCardView>
            </div>
          </div>
        </Container>
      </div> */}
      <section>
        <div className="flex justify-center">
          <Container>
            <div className="flex justify-center ">
              <h1 className="md:text-center text-left text-primary font-gilroy pl-1">
                Our
              </h1>

              <div className="md:ml-28 ml-20 ">
                <div className="flex justify-end">
                  <div className="border border-primary border-r-0 border-l-0 border-t-0 md:border-b-8 border-b-4 md:w-52 w-28 flex justify-end md:pr-16 pr-7">
                    <p className=" md:text-4xl 2xl:text-5xl text-2xl font-gilroy font-bold md:-mb-5 -mb-3 pl-7 md:w-96 ">
                      <span className="text-black font-gilroy md:pr-4 pr-1 ">
                        Quality
                      </span>
                      Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <p className="text-textDark font-gilroy md:leading-7 leading-9 md:text-xl text-sm md:tracking-wide md:transition-none font-thin text-center md:pt-14 pt-8 md:w-8/12 w-10/12">
                techparser strives to provide highest level of quality turnkey
                IT
                <span className="text-primary pl-1">
                  Business Solutions{' '}
                </span>{' '}
                to its existing and potential customers while remaining
                compliant to national and local regulatory requirement.
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-textDark font-gilroy md:leading-7 leading-9 md:text-xl text-sm  font-thin text-center md:pt-14 pt-8 md:w-8/12 w-10/12 ">
                We invest in our human resource by providing them a conducive
                work environment and by providing them regular training,
                guidelines for
                <span className="pl-1 font-bold text-black ">
                  skill development.
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-textDark font-gilroy md:leading-7 leading-9 md:text-xl text-sm font-thin text-center md:pt-14 pt-8 md:w-8/12  w-10/12 ">
                It&apos;s the ultimate goal of PureLogics to become market
                leader in IT solutions by being{' '}
                <span className="pl-1 font-bold text-primary ">
                  customer centric,
                </span>{' '}
                quick responsive to market needs and customer expectations.
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-textDark font-gilroy md:leading-7 leading-9 md:text-xl md:tracking-wide text-sm font-thin text-center md:pt-14 pt-8 md:w-8/12 w-10/12">
                <span className="pl-1 font-bold text-primary ">
                  Our top management
                </span>{' '}
                takes keen interest in improvement of quality management system
                and related actions will be undertaken regularly to continually
                improve the{' '}
                <span className="pl-1 font-bold text-primary ">
                  process performance.
                </span>{' '}
              </p>
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-testimonial xl:mt-40 xl:mb-20 bg-cover bg-no-repeat min-h-350 2xl:min-h-470 pb-10 bg-testimonial-position">
        <div className="flex justify-center">
          <Container>
            <div className="flex md:flex-row flex-col flex-wrap justify-center 2xl:gap-x-40">
              <div className="flex flex-col mt-56 pl-9 md:pl-0">
                <p className="text-primary font-semibold text-lg">
                  Testimonials
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
      <div className="flex justify-center">
        <Container>
          <section className="flex justify-center md:mb-10 xl:mb-24 md:pt-10 xl:pt-10 mt-20 md:transform md:scale-75 xl:scale-100">
            <div className="md:w-11/12 xl:w-8/12 w-full md:pt-28 pt-16 pb-24 bg-action-img md:bg-no-repeat bg-cover bg-center text-center md:rounded-5xl">
              {' '}
              <h2 className="text-white font-gilroy font-medium text-center text-lg md:text-xl xl:text-3xl">
                Have any project on mind? <br></br>
                Lets work together
                <span className="text-primary font-gilroy font-medium rounded-xl">
                  .
                </span>
              </h2>
              <div className="flex justify-center">
                <p className="text-white font-gilroy sm:text-tiny md:text-base xl:text-sm text-center pt-5 w-4/12 xl:w-3/12 ">
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
              <div className="flex justify-center">
                <p className="text-white font-gilroy text-center sm:text-tiny xl:text-base md:mt-6 mt-8 xl:w-2/12">
                  Or, set-up a quick meeting with their{' '}
                  <span className="text-primary text-xs xl:text-base">
                    team
                  </span>{' '}
                  on <span className="underline text-white">slack</span>
                </p>{' '}
              </div>
            </div>
          </section>
        </Container>
      </div>
    </Layout>
  );
}
