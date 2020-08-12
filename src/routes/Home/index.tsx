import React from 'react';

import RouteContainer from '../../components/RouteContainer';
import { H1, H6 } from '../../components/core/Heading';
import TimelineCard from '../../components/TimelineCard';
import IndentContainer from '../../components/IndentContainer';
import VerticalSpacing from '../../components/VerticalSpacing';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

function Home() {
  return (
    <RouteContainer>
      <H1>Aspiring Frontend developer.</H1>
      <H1>Based anywhere on this planet.</H1>

      <VerticalSpacing height={VerticalSpacingHeight.Giant} />

      <H6>
        As a 25 years old guy, there's a lot for me to achieve. Many things I
        don't know; zero of them I can't learn. Nothing beats consistent effort,
        paired with elevated motivation and intention.
      </H6>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H6>
        In the early days of my Computer Science studies, I've landed my first
        intership. The rest is history; I'm still working, craving for endless
        opportunities. Here's a short summary of my working experience:
      </H6>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <IndentContainer>
        <TimelineCard
          title="Productive"
          subtitle="(Aug 2019 - still here)"
          upperDescription="One of the most successful agencies in Croatia, Infinum, didn't like any of available tools for managing their business. That's why they started to build their own product - Productive, which is growing since 2015."
          lowerDescription='Besides the "regular engineering stuff" (Frontend, Backend, Design), working on a product like this brought me massive knowledge in the fields of Business Management, Product Ownership, and Sales.'
        />

        <TimelineCard
          title="Infinum"
          subtitle="(Feb 2019 - still here)"
          upperDescription="Before Productive, I worked with the US-based clients on {{Loop Community}}; an audio project where Artists can upload their songs divided into basic parts, like voices and instruments."
          lowerDescription="My main tasks were building beautiful user interfaces, as well as close communication with Design and Backend teams to make it done."
        />

        <TimelineCard
          title="OptimIT"
          subtitle="(Feb 2018 - Feb 2019)"
          upperDescription="I've worked as a full-stack developer on E-commerce projects for two big Telecommunication companies in region - {{A1}} and {{Tomato}}."
        />

        <TimelineCard
          title="Asseco SEE"
          subtitle="(Jan 2017 - Jul 2017)"
          upperDescription="At first, I was working on an internal file sharing platform; later on, I got my hands onto the {{PBZ mobile banking app}}, one of the largest banks in Croatia under the Intesa Sanpaolo bank."
        />

        <TimelineCard
          title="OptimIT"
          subtitle="(Jul 2015 - Aug 2015)"
          upperDescription="This was my first and last internship, where I used to work on a project for creating digital signatures on PDF documents."
        />
      </IndentContainer>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <H6>
        I'm also grateful for my education, which helped me a lot in my career
        and personal growth.
      </H6>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <IndentContainer>
        <TimelineCard
          title="Master's Degree"
          subtitle="(Sep 2016 - Jun 2018)"
          upperDescription="I graduated at the Faculty of Electrical Engineering and Computing in Zagreb, Croatia."
        />

        <TimelineCard
          title="Exchange Student"
          subtitle="(Sep 2017 - Feb 2018)"
          upperDescription="I spent a semester at Hochschule für Telekomunikation in Leipzig, Germany. Strengthening my knowledge and meeting different people from all over the world was one of the best experiences in my life."
        />

        <TimelineCard
          title="Bachelor's Degree"
          subtitle="(Sep 2013 - Jun 2016)"
          upperDescription="That's when everything started; again at the Faculty of Electrical Engineering and Computing in Zagreb, Croatia."
        />
      </IndentContainer>

      <VerticalSpacing height={VerticalSpacingHeight.Giant} />

      <H6>
        This website was designed and build from scratch completely by myself. I
        love ReactJS so much that I used it here, even though it's not a perfect
        solution for this. Check out the source code if you're interested.
      </H6>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H6>
        Besides JS, I adore HTML/CSS (yes, I've just said that); and I also have
        experience with Java, Ruby, and design tools. On the non-technical side,
        I was involved in Product Management, Sales, Business Management, and
        Rebranding.
      </H6>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H6>
        I like to fill my free time with photography, sports, writing, and
        reading. Most of the time backed up with electronic music.
      </H6>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H6>
        Check out my profiles on LinkedIn and Medium, or contact me at
        dvidovic91@gmail.com. It's so nice to hear from you!
      </H6>
    </RouteContainer>
  );
}

export default Home;
