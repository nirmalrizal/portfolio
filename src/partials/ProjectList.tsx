import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

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
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
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
    </div>
  </Section>
);

export { ProjectList };
