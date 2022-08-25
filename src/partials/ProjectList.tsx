import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import Project from './Project';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Picarto.tv"
        description={`
        Picarto.tv is a streaming platform for artists where users can do live streaming and chat side by side.
        I was responsible for the frontend development of the platform. I have worked on the frontend of the platform for over 2 years using React as the main tech stack. 
        I implemented WebSocket for real-time chat, notification, feed, and alert systems. 
        We made our custom wrapper over the Mist player extending different features for Picarto specifically. 
        Other than that, I have worked on implementing a Kudos feature where users can buy and contribute kudos to streamers to help them earn through streaming. 
        I have also worked on implementing a Masonry gallery for users to showcase their work on the platform.`}
        link="https://picarto.tv"
        img={{
          src: '/assets/images/project-picarto.png',
          alt: 'Picarto',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>React.js</Tags>
            <Tags color={ColorTags.LIME}>TypeScript</Tags>
            <Tags color={ColorTags.FUCHSIA}>GraphQL</Tags>
            <Tags color={ColorTags.ROSE}>WebSockets</Tags>
          </>
        }
      />
      <Project
        name="Air Quality Nepal"
        description={`
          Air Quality Nepal is a Twitter bot that automatically tweets the current pollution monitoring information on a timely basis of a selected station.
          I volunteered with Open Knowledge Nepal for the development of this project. I worked as a lead developer on this project. The Twitter bot was written using Node.js. The bot fetches the real-time pollution data using the open API developed by OKNP on certain intervals and publishes info-graphics with some information on Twitter.
        `}
        link="https://twitter.com/airqualitynepal"
        img={{
          src: '/assets/images/project-aqn.png',
          alt: 'Air Quality Nepal',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Node.js</Tags>
            <Tags color={ColorTags.LIME}>Twitter API</Tags>
            <Tags color={ColorTags.FUCHSIA}>SVG</Tags>
          </>
        }
      />
      <Project
        name="Weekly"
        description={`
          Weekly is a static website that publishes content from a Slack channel on a weekly group basis. A Slack bot webhook is integrated on a particular channel. Whenever someone posts a website link in that channel, the Slack bot takes the URL, crawls the title of the page, writes on a static file on the GitLab repository of the project, and triggers the CI/CD to automatically publish the content on the website.
        `}
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Weekly',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>GatsbyJS</Tags>
            <Tags color={ColorTags.LIME}>Node.js</Tags>
            <Tags color={ColorTags.FUCHSIA}>Netlify</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
