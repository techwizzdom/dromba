import React from 'react';
import { useDevice } from '../../hooks/useDevice';

import RouteContainer from '../../components/RouteContainer';
import { H1, H5 } from '../../components/core/Heading';
import TimelineCard from '../../components/TimelineCard';
import IndentContainer from '../../components/IndentContainer';
import VerticalSpacing from '../../components/VerticalSpacing';
import Hyperlink from '../../components/Hyperlink';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { DeviceType } from '../../enums/DeviceType';

function Home() {
  const deviceType = useDevice();
  return (
    <RouteContainer>
      <H1>Aspiring Frontend developer.</H1>
      <H1>Based anywhere on this planet.</H1>

      <VerticalSpacing
        height={
          deviceType === DeviceType.Mobile
            ? VerticalSpacingHeight.Xlarge
            : VerticalSpacingHeight.Giant
        }
      />

      <H5>
        As a 25 years old guy, there's a lot for me to achieve. Many things I
        don't know; zero of them I can't learn.
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>
        In the early days of my Computer Science studies, I've landed my first
        internship. The rest is history; I'm still working, craving for endless
        opportunities. Here's a short summary of my working experience:
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <IndentContainer>
        <TimelineCard title="Productive" subtitle="(Aug 2019 - still here)">
          The ambitious agency{' '}
          <Hyperlink href="https://infinum.com/">Infinum</Hyperlink> didn't like
          any of available tools for managing their business. That's why they
          started to build their own product -{' '}
          <Hyperlink href="https://www.productive.io/">Productive</Hyperlink>,
          which is growing since 2015.
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          Besides the "regular engineering stuff" (Frontend, Backend, Design),
          working on a product like this is bringing me massive knowledge in the
          fields of Business Management, Product Ownership, and Sales.
        </TimelineCard>

        <TimelineCard title="Infinum" subtitle="(Feb 2019 - still here)">
          Before Productive, I worked with the US-based clients on{' '}
          <Hyperlink href="https://loopcommunity.com/">
            Loop Community
          </Hyperlink>
          ; an audio project where Artists can upload their songs divided into
          basic parts, like voices and instruments.
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          My main tasks were building beautiful user interfaces,discussing the
          solutions with Design and Backend teams, and communication with the
          clients."
        </TimelineCard>

        <TimelineCard title="OptimIT" subtitle="(Feb 2018 - Feb 2019)">
          I've worked as a full-stack developer on E-commerce projects for two
          big Telecommunication companies in region -{' '}
          <Hyperlink href="https://www.a1.hr/">A1</Hyperlink> and{' '}
          <Hyperlink href="https://www.tomato.com.hr/">Tomato</Hyperlink>.
        </TimelineCard>

        <TimelineCard title="Asseco SEE" subtitle="(Jan 2017 - Jul 2017)">
          Working in a huge corporation like{' '}
          <Hyperlink href="https://asseco.com/">Asseco</Hyperlink> brought me
          unique views of how 20000+ people company can operate.
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          At first, I was working on an internal file sharing platform; later
          on, I got my hands onto the{' '}
          <Hyperlink href="https://play.google.com/store/apps/details?id=hr.asseco.android.intesa.isbd.pbz&hl=en">
            PBZ mobile banking app
          </Hyperlink>
          , one of the largest banks in Croatia under the Intesa Sanpaolo bank.
        </TimelineCard>

        <TimelineCard
          title="OptimIT Intership"
          subtitle="(Jul 2015 - Aug 2015)"
        >
          This was my first and last internship, where I used to work on a
          project for creating digital signatures on PDF documents.
        </TimelineCard>
      </IndentContainer>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <H5>
        I'm also grateful for my education, which helped me a lot in my career
        and personal growth.
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <IndentContainer>
        <TimelineCard title="Master's Degree" subtitle="(Sep 2016 - Jun 2018)">
          I graduated at the Faculty of Electrical Engineering and Computing in
          Zagreb, Croatia, and became a{' '}
          <Hyperlink href="https://www.fer.unizg.hr/en/study_programs/graduate_study/information_and_communication_technology">
            Master of Science in Information and Communication Technology.
          </Hyperlink>
        </TimelineCard>

        <TimelineCard title="Exchange Student" subtitle="(Sep 2017 - Feb 2018)">
          I spent half a year at{' '}
          <Hyperlink href="https://www.hft-leipzig.de/de/studierende/gesellschaft-und-informatik.html">
            Hochschule für Telekomunikation in Leipzig
          </Hyperlink>
          , Germany. Strengthening my knowledge and meeting different people
          from all over the world was one of the best experiences in my life.
        </TimelineCard>

        <TimelineCard
          title="Bachelor's Degree"
          subtitle="(Sep 2013 - Jun 2016)"
        >
          I became a{' '}
          <Hyperlink href="https://www.fer.unizg.hr/en/study_programs/undergraduate_study/fer3/computing">
            Bachelor of Science in Computing
          </Hyperlink>
          ,again at the Faculty of Electrical Engineering and Computing in
          Zagreb, Croatia.
        </TimelineCard>
      </IndentContainer>

      <VerticalSpacing
        height={
          deviceType === DeviceType.Mobile
            ? VerticalSpacingHeight.Xlarge
            : VerticalSpacingHeight.Giant
        }
      />

      <H5>
        This website was designed and built from scratch completely by myself. I
        love ReactJS so much that I used it here, even though it's not a perfect
        solution for this. Check out the{' '}
        <Hyperlink href="https://github.com/dromba/dromba">
          source code
        </Hyperlink>{' '}
        if you're interested.
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>
        Besides JS, I adore HTML/CSS (yes, I've just said that); and I also have
        experience with Java, Ruby, and design tools. Knowledge of Git, SASS,
        testing libraries, Typescript, Storybook, Server-side rendering,
        continuous integration, etc. — is inevitable. Everything in that
        wonderful Agile environment.
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>
        On the non-technical side, I was involved in Product Management, Sales,
        Business Management, and Rebranding.
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>
        I like to fill my free time with photography, sports, writing, and
        reading. Most of the time backed up with electronic music.
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>
        Check out my profiles on{' '}
        <Hyperlink href="https://www.linkedin.com/in/dvidovic/">
          LinkedIn
        </Hyperlink>{' '}
        and <Hyperlink href="https://medium.com/@dvidovic91">Medium</Hyperlink>,
        or contact me at{' '}
        <Hyperlink href="patrick.domv@gmail.com" isEmail={true}>
          patrick.domv@gmail.com
        </Hyperlink>
        . It's so nice to hear from you!
      </H5>
    </RouteContainer>
  );
}

export default Home;
