import * as React from 'react'
// import { graphql } from 'gatsby'
// import { LocalizedLink } from 'gatsby-theme-i18n'
import Lottie from 'react-lottie'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import { useIntl } from 'react-intl'
import { PrimaryFixedButton } from '../components/Buttons'
import DocCard from '../components/layout/homepage/DocCard'
import CommunityCard from '../components/layout/homepage/CommunityCard'
import { StaticImage } from 'gatsby-plugin-image'
import { SecondaryButton } from '../components/Buttons'
import ExploreDocs from '../components/layout/homepage/ExploreDocs'
import * as animationData from '../images/animations/dev-hero.json'
import { LocalizedLink } from 'gatsby-theme-i18n'
import ExploreLinkSection from '../components/layout/homepage/ExploreLinkSection'

export default function Index() {
  // const intl = useIntl()

  return (
    <Layout>
      <SEO title="Documentation Home" />
      <section className="xl:container my-20 md:mt-20 md:mb-36 lg:mb-60">
        <div className="flex flex-col md:flex-row md:items-center px-6">
          <div className="lg:m-0 mb-10 md:w-1/2 md:px-5 lg:px-10">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6">
              Substrate <br /> Develop Hub
            </div>
            <h4 className="text-xl xl:text-3xl font-semibold">
              Your path to runtime engineering starts here
            </h4>
            <p className="max-w-lg">
              Substrate is powered by best-in-class cryptographic research and
              comes with peer-to-peer networking, consensus mechanisms, and much
              more.
            </p>
            <PrimaryFixedButton link="/v3">Get Started</PrimaryFixedButton>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="lg:h-[482px] lg:w-[482px]">
              <Lottie
                options={{
                  animationData,
                  loop: false,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////// */}
      {/* Learn Subsrate Section */}
      {/* ////////////////////// */}
      <section className="relative px-6 xl:container md:mt-20 md:mb-36 lg:mt-40 lg:mb-60 h-full">
        <div className="absolute inset-0 md:mt-20">
          <div className="lg:hidden">
            <StaticImage
              src={'../images/backgrounds/backgroundTwo.png'}
              alt={'Learn Substrate Background'}
              layout="constrained"
            />
          </div>
          <div className="hidden lg:block">
            <StaticImage
              src={'../images/backgrounds/backgroundOne.png'}
              alt={'Learn Substrate Background'}
            />
          </div>
        </div>
        <div className="h-full relative">
          <div className="text-center mb-16">
            <h1>Learn Substrate</h1>
            <h4 className="text-xl xl:text-3xl font-semibold">
              Substrate developer knowledge base
            </h4>
          </div>
          <div className="sm:flex sm:flex-wrap sm:justify-center">
            <DocCard
              title={`Documentation`}
              textOne="Welcoem to Substrate!"
              textTwo={`Discover the principles and design decisions that Substrate is built on. Read about its key features and capabilties as well as the specific skills needed to be an effective Substrate blockchain developer.`}
              link={`/v3`}
              cta={`Get started`}
              iconName={`docsIcon`}
            />
            <DocCard
              title={`How-To Guides`}
              textOne="A modular approach to learning Substrate"
              textTwo={`Browse through the collection of how-to guides to help you solve common problems to building Substrate blockchains. Refer to these to learn the patterns that will help you become a better runtime engineer.`}
              link={`/how-to-guides`}
              cta={`Learn and contribute`}
              iconName={`htgIcon`}
            />
            <DocCard
              title={`Tutorials`}
              textOne="Active engagement"
              textTwo={`Create your first Substrate chain, perform a forkless upgrade, and more. These tutorials are designed to help developers getting started with Substrate get up to speed with the basics. Use these to dive right into learning Substrate in a fun and engaging way.`}
              link={`/tutorials`}
              cta={`MISSING CTA`}
              iconName={`tutsIcon`}
            />
          </div>
        </div>
      </section>
      {/* ////////////////// */}
      {/* Playground Section */}
      {/* ////////////////// */}
      <section className="xl:container my-20 md:mt-20 md:mb-36 lg:mt-40 lg:mb-60 ">
        <div className="flex flex-col md:flex-row md:items-center px-6">
          <div className="mb-16 lg:m-0 md:w-1/2 md:px-5 lg:px-10">
            <div className="text-5xl xl:text-7xl font-extrabold mb-8">
              Playground
            </div>
            <h4 className="text-xl xl:text-3xl font-semibold">
              Set up a cloud sandbox
            </h4>
            <p className="max-w-lg">
              Skip the dependency installs and hack on a running Substrate Node
              straight from your browser. Useful for hosting developer workshops
              or following tutorials, using a sandbox allows you to skip the
              preliminary set-up stages and experiment right away.
            </p>
            <div className="my-8">
              <button className="duration-150 ease-in hover:opacity-50">
                <LocalizedLink
                  className="flex items-center"
                  to="/playground/?deploy=node-template#config"
                >
                  <Icon
                    name="nodeTemplate"
                    className="w-8 fill-current text-substrateDark dark:text-substrateWhite"
                  />
                  <div className="text-xl ml-4 font-extrabold">
                    Node Playground
                  </div>
                </LocalizedLink>
              </button>
              <button className="block mt-8 mb-16 duration-150 ease-in hover:opacity-50">
                <LocalizedLink
                  className="flex items-center"
                  to="/playground/?deploy=front-end-template#config"
                >
                  <Icon
                    name="feTemplate"
                    className="fill-current text-substrateDark dark:text-substrateWhite"
                  />
                  <div className="text-xl ml-4 font-extrabold text-left">
                    Front-End Template Playground
                  </div>
                </LocalizedLink>
              </button>
            </div>
            <SecondaryButton cta link="/playground">
              Explore Playground
            </SecondaryButton>
          </div>
          <div className="flex justify-center md:w-1/2 duration-150 ease-in hover:opacity-50">
            <LocalizedLink to="/playground">
              <StaticImage
                backgroundColor="transparent"
                src="../images/playground-hero.png"
                alt="Substrate Playground"
                layout="constrained"
              />
            </LocalizedLink>
          </div>
        </div>
      </section>
      {/* ///////////////////////////// */}
      {/* Explore Documentation Section */}
      {/* ///////////////////////////// */}
      <section className="px-6 xl:container mb-40">
        <div className="mb-14">
          <div className="text-4xl md:text-5xl xl:text-7xl font-extrabold mb-8">
            Explore Documentation
          </div>
          <div className="text-xl">
            Browse through the use case specific highlights that meet your
            needs.
          </div>
        </div>
        <div className="sm:flex sm:flex-wrap sm:justify-start xl:justify-evenly">
          <ExploreDocs />
        </div>
      </section>
      {/* ////////////////////////////// */}
      {/* Connect With Community Section */}
      {/* ////////////////////////////// */}
      <section className="xl:container my-20 md:mt-20 md:mb-40">
        <div className="flex flex-col md:flex-row md:items-center px-6 lg:mb-20">
          <div className="lg:m-0 md:w-1/2 md:px-5 lg:px-10">
            <div className="text-4xl xl:text-6xl 2xl:text-7xl font-extrabold mb-8">
              Connect with <br /> the community
            </div>
            <p className="max-w-lg">
              Network, share and learn from others who speak your (tech)
              language! Join in the conversation & keep up with the latest
              developments. NEED MORE TEXT HERE!!!!!
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <StaticImage
              backgroundColor="transparent"
              src="../images/photos/homepage/connect-with-the-community.png"
              alt="Connect With Substrate Community"
              layout="constrained"
            />
          </div>
        </div>
        <CommunityCard />
      </section>
      <ExploreLinkSection links={['technology', 'vision', 'ecosystem']} />
    </Layout>
  )
}
