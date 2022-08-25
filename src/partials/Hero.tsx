import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Nirmal</GradientText> 👋
        </>
      }
      description={
        <>
          Frontend developer with over 5 years of experience with a passion for
          delivering immersive and engaging user experiences through efficient
          product development, proactive feature optimization, and relentless
          debugging. I have also worked on mobile and backend projects with a
          solid frontend development background. I have helped many founders
          build their products from scratch. Aspiring to combine seasoned
          experience with solid technical skills to become an excellent Frontend
          developer.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/nirmalrizal" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/nirmalrijal/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/nirmalrizal" target="_blank">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
