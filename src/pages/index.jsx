import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import { faGlobe, faImages, faFilePdf, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import Technologies from '../views/Technologies'
import About from '../views/About'
import Contact from '../views/Contact'

// Icons

// Images
import bu from '../images/bu.png'
import uos from '../images/uos.png'
import jp from '../images/jp.jpg'
import adyen from '../images/adyen.png'
import gmsc from '../images/gmsc.png'
import Skill from '../components/Skill'
import mentorcruise from '../images/mentorcruise.jpeg'

library.add(faGithub, faGlobe, faImages, faFilePdf, faVideo)

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => {
  const videoWidth = Math.max(window.innerWidth / 3, 300)
  return (
    <>
      <Layout />
      <Parallax pages={getOffset(0)}>
        <Hero offset={getOffset(1)}>
          <BigTitle>
            Hello, <br /> I'm Greg Mitten.
          </BigTitle>
          <Subtitle>
            I'm a Software Engineer who's been accruing technical skills for over 10 years and I'm putting them to use
            to tangible business value.
          </Subtitle>
          <ContactText>
            <a href="mailto:me@greg-mitten.dev">Email me</a> or find me on{' '}
            <a href="https://github.com/Gregam3">GitHub</a> &{' '}
            <a href="https://www.linkedin.com/in/gregory-mitten-5a0a06106/">LinkedIn</a>. I'm open to discuss any
            software project, consultation free of charge.
          </ContactText>

          <Subtitle>Find more info below</Subtitle>
        </Hero>
        <Projects offset={getOffset(2)}>
          <Title>Greg Mitten Software Consulting (GMSC)</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Catalyst"
              site="https://catalystpf.co.uk/"
              bg="linear-gradient(90deg, rgba(113,4,171,1) 0%, rgba(36,101,255,1) 100%);"
              technologies="Java, Spring, API, ReactJS, Jenkins, MySQL, AWS"
            >
              Since 2019 I've been off and on working with catalyst to solve challenging problems that could be
              transformative for parts of their business, it's been rewarding and I have high hopes for the future of
              our project.
            </ProjectCard>
            <ProjectCard
              title="Forum Webscraper"
              site="https://www.bournemouth.ac.uk"
              bg="linear-gradient(90deg, rgba(36,101,255,1) 0%, rgba(36,180,180,1) 100%);"
              technologies="Java"
            >
              Commissioned by researchers at Bournemouth University, I built an application that scrapes data from over
              20 vastly different forums within minutes. This was achieved using an intelligent Software architecture
              that makes abstract features present in all forums.
            </ProjectCard>
          </ProjectsWrapper>
          <Title>Passion Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="TIDE"
              site="https://tmrow.com"
              bg="linear-gradient(90deg, rgba(179,1,21,1) 0%, rgba(255,108,61,1) 100%);"
              technologies="Node.js, ReactJS, WebSockets, Compilers"
              github="TIDE"
            >
              I built an Integrated Development Environment for Tomorrow's new mobile application. Reducing barriers for
              all volunteer engineers to contribute their highly demanded technical skills to climate change, one of the
              most pressing issues of our time.
            </ProjectCard>
            <ProjectCard
              title="JeSSE"
              site="https://jesse.greg-mitten.dev"
              bg="linear-gradient(90deg, rgba(255,108,61,1) 0%, rgba(190,150,36,1) 100%);"
              technologies="JavaScript, Compilers, Babel"
              video="https://www.youtube.com"
              paper="https://github.com/Gregam3/Thesis/raw/master/thesis.pdf"
            >
              Using the techniques I learnt during the development of TIDE, I have extracted and adapted my JavaScript
              Comparison Engine (JeSSE) that uses compiler technology to compare the similiarities of JavaScript
              expressions, functions or even whole modules! This engine has been evaluated to perform remarkably well.
              The site is live on the link below.
            </ProjectCard>
          </ProjectsWrapper>
          <Title>University Projects with Serious Engineering</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="UK House price heatmap"
              bg="linear-gradient(90deg, rgba(17,85,3,1) 0%, rgba(0,176,16,1) 100%);"
              technologies="Java, ReactNative, API, Docker, TravisCI, MySQL, AWS"
              github="UKHousePriceHeatMap"
              images="https://github.com/Gregam3/UKHousePriceHeatMap/blob/master/README.md"
            >
              During university I lead a team developing an application that fetches, transforms and displays all UK
              houseprice data over the last 15 years, we even wrote our own graphics for our heatmap.
            </ProjectCard>
            <ProjectCard
              title="Tempus"
              bg="linear-gradient(90deg, rgba(0,176,16,1) 0%, rgba(0,200,117,1) 100%);"
              technologies="Scala, Play, ReactJS, API, MySQL, AWS, Docker, TeamCity, DSL, Compilers "
              github="Tempus"
            >
              Tempus is a timetabler with a custom compiled Domain Specific Language. It's simple, you
              write constraints i.e. nothing scheduled after 5pm and all rooms must have disabled access and then our
              SAT solver creates a timetable for you.
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={getOffset(3)}>
          <Title>Experience</Title>
          <AboutHero>
            <Avatar src={gmsc} alt="GMSC" />
            <AboutSub>GMSC - 4 Years</AboutSub>
          </AboutHero>
          <AboutDesc>
            I've been an independent Software Consultant since 2018, I've been working off and on in various projects
            mentioned above. I'm especially excited about the possibilities and application of my project with Catalyst.
          </AboutDesc>
          <AboutHero>
            <Avatar src={adyen} alt="Adyen" />
            <AboutSub>Adyen - 1.3 Years</AboutSub>
          </AboutHero>
          <AboutDesc>
            Adyen is a huge Euro FinTech company trusted by many of the world's leading tech giants to handle a share of
            their payments (Google, Netflix, Amazon, Uber, Airbnb, Facebook & more). I lead the following projects:
            <br />
            <br />
            <li>
              The companies only Import/Export tool for any card data going in & out of Adyen, a security critical
              company wide tool, and an absolute life-saver for our support staff.
            </li>
            <li>
              Autorescue, a tool that uses smart logic and machine learning to dynamically calculate the best dates to
              bill customers explained here.
            </li>
          </AboutDesc>
          <div style={{ paddingLeft: '20%' }}>
            <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/L1wca76oxOs" />
          </div>
          <AboutHero>
            <Avatar src={mentorcruise} alt="Mentorcruise" />
            <AboutSub>Mentorcruise - 3 Years</AboutSub>
          </AboutHero>
          <AboutDesc>
            I'm a registered 5 star mentor over a mentorcruise, for a small fee a try to help my mentees in anyway I can
            this often involves code reviews, technical explanations, learning guidance and much more! I typically keep
            between 1-3 mentees when active
          </AboutDesc>
          <AboutHero>
            <Avatar src={jp} alt="JP" />
            <AboutSub>JPMorgan Chase & Co - 1 Year</AboutSub>
          </AboutHero>
          <AboutDesc>
            During my time at JPMC, I worked as a Technical Analyst Placement Intern; I was on a small agile team
            building a RESTful API platform that manages a patented automated regression workflow. This automated system
            reduced the work of testers from weeks to hours. Additionally, I independently reduced the workload of
            another team via the automation of many manual tasks.
          </AboutDesc>
          <Title>Education</Title>
          <AboutHero>
            <Avatar src={uos} alt="Sussex" />
            <AboutSub>University of Sussex - 1 Year</AboutSub>
          </AboutHero>
          <AboutDesc>
            <b>Advanced Computer Science MSc</b> - Achieved a{' '}
            <span style={{ fontStyle: 'italic' }}>First class with honours</span>
            &nbsp;overall and in every module and received the scarce{' '}
            <span style={{ fontStyle: 'italic' }}>Chancellor's Scholarship for Academic Excellence.</span>
          </AboutDesc>
          <AboutHero>
            <Avatar src={bu} alt="BU" />
            <AboutSub>Bournemouth University - 3 Years</AboutSub>
          </AboutHero>
          <AboutDesc>
            <b>Software Engineering BSc</b> - a First class with honours
          </AboutDesc>
        </About>
        <Contact offset={getOffset(4)}>
          <Inner>
            <Title>Hire Me</Title>
            <ContactText>
              <a href="mailto:me@greg-mitten.dev">Email me</a> or find me on{' '}
              <a href="https://github.com/Gregam3">GitHub</a> &{' '}
              <a href="https://www.linkedin.com/in/gregory-mitten-5a0a06106/">LinkedIn</a>. I'm open to discuss any
              software project, consultation free of charge.
            </ContactText>
          </Inner>
        </Contact>
      </Parallax>
    </>
  )
}

const offsets = {
  veryLarge: [6, 0, 1, 4, 6 * 1.3],
  large: [6, 0, 1, 3.5, 4.5 * 1.3],
  medium: [7.5, 0.4, 2, 5, 6.5 * 1.3],
  small: [10, 0.4, 3, 7.5, 9 * 1.3],
  mobile: [14, 0.4, 4, 10, 12.5 * 1.3],
}

const getOffset = i => {
  // Node throws an error when building unless this line is present
  if (typeof window === 'undefined') return 0

  const windowSize = window.innerHeight + window.innerWidth

  if (windowSize > 2500) return offsets.veryLarge[i]
  if (windowSize > 2500) return offsets.veryLarge[i]
  if (windowSize > 2000) return offsets.large[i]
  if (windowSize > 1500) return offsets.medium[i]
  if (windowSize > 1000) return offsets.small[i]
  return offsets.mobile[i]
}

export default Index
