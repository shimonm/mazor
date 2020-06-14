import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Shimon Mazor</HeadingXL>
        <TextBody>
            Hi there, I am a{' '}
            <a
              data-tooltip="Linkedin"
              href="https://www.linkedin.com/in/shimonmazor/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Software Engineer</u>
            </a>{' '}based in NYC. 
            <br />
            <br />
            I recently made {' '}
            <a
              data-tooltip="help business during COVID-19"
              href="https://www.mindfulstimulus.com/?ref=blog"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Mindful Stimulus</u>
            </a>{' '}
            a COVID-19 🦠 response to help businesses struggling during the pandemic. 
            This site was made entirely without code on {' '}
            <a
              data-tooltip="bubble.io"
              href="https://bubble.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>bubble</u>
            </a>.{' '}
          <br />
          <br />
            In my free time I enjoy movement 🤸 playing the guitar 🎸 and learning spanish 🇪🇸, while also collecting notes in {' '}
              <a 
                href="https://roamresearch.com/"
              >
                <u>Roam</u>{' '}
              </a> and {' '}
              <a 
                href="https://notion.so"
              >
                <u>Notion</u> 
              </a> on books 📚 I read.
          <br />
          <br />
          Currently available for hire. Want to work together? You know what to do..
          
        </TextBody>
        <Button href="mailto:shimon&#64;mazor.dev?subject=Hi&body=👋">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
