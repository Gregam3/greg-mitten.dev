import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ProjectCard = ({ title, site, children, bg, technologies, github, images, video, paper }) => (
  <Wrapper target="_blank" rel="noopener noreferrer" bg={bg}>
    <Text style={{ fontSize: 18 }}>{children}</Text>
    <Title>{title}</Title>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color:'white' }}>{technologies}</Text>
    <h1>
      {/* TODO ITERATE OVER "LINKS" OBJECT */}
      {github && (
        <a href={`https://github.com/Gregam3/${github}`}>
          <FontAwesomeIcon color="white" icon={['fab', 'github']} />
        </a>
      )}{' '}
      {site && (
        <a href={site}>
          <FontAwesomeIcon color="white" icon="globe" />
        </a>
      )}{' '}
      {images && (
        <a href={images}>
          <FontAwesomeIcon color="white" icon="images" />
        </a>
      )}{' '}
      {video && (
        <a href={video}>
          <FontAwesomeIcon color="white" icon={['fa', 'youtube']} />
        </a>
      )}{' '}
      {paper && (
        <a href={paper}>
          <FontAwesomeIcon color="white"icon="file-pdf" />
        </a>
      )}
    </h1>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
