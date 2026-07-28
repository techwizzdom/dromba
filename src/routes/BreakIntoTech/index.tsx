import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import Helmetiser from '../../components/core/Helmetiser';
import { H2, H3 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import Paragraph from '../../components/core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';
import { Theme } from '../../styles';
import { css } from 'emotion';
import { Media } from '../../enums/Media';
import { ThemeContext } from '../../context/ThemeContext';
import { t } from '../../translations/t';

function BreakIntoTech() {
  const theme = React.useContext(ThemeContext);

  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <Helmetiser
        title="Break Into Tech Course"
        description="The only course you'll need. Break into tech in a most efficient way."
        url="https://www.techwizzdom.com/break-into-tech"
      />
      <H2>
        Courses these days are too long. Too detailed. Filled with too much
        useless information.
      </H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        There's no reason to learn complex JavaScript concepts that even Senior
        developers struggle with. Nobody will ask you about them on interviews -
        so what's the point of trying to understand something you don't need to
        understand at the moment? Waste of time and energy.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        LEARN ONLY WHAT YOU NEED
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>
        Your main goal when starting learning to code should be getting a job.
      </H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        No, not learning. Not making 259358 side projects. Not solving countless
        Leetcode challenges.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        START EARNING BIG
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>Let me explain.</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        The best place to learn is a company. You'll start learning properly
        when you get your first job; when you will be surrounded by other
        experienced engineers 8 hours per day; when you'll be working on massive
        real projects. Everything before - is just a preparation.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        GET THE JOB
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>Don't waste time preparing, when you can already earn big.</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Focus on important things that will actually need you to get that first
        job. In those extra 6-12 months of learning useless programming
        concepts, you could have already had a job, learn for real, and earn
        big.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        GO TO THE COURSE
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>
        And that's exactly what this course is about. Learn only the things you
        need in the most effiecient way. Get the job fast, and start earning
        fast.
      </H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        LET'S GO
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>FAQ</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Hey Dom, why does this course exist?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        It's here because so many people are asking me to recommend a perfect
        course. And I can't. There's too many of them, going into too much
        details. I want you to start fucking earning big money, fast. This is
        not a college, and learning for exams. This is real life, real projects,
        real money.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Why should I trust you?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        I'm a Senior Frontend Engineer, coding for 7+ years. I worked in many
        different enviroments, on a countless number of projects, with
        exceptional enngineers. I've been mentoring people, interviewing them,
        reviewing their code.I know the industry - I know what's needed and what
        not.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Also, I'm @tech_wizzdom on socials, with half a million followers across
        platforms. I've received a massive number of compliments about my simple
        explanations.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        So I decided to summarise everything you need to break into tech, and
        make a course out if it. I gave my best - whether you'll trust me or
        not, it's up to you.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>You're cool! What will I learn?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        We'll start with HTML, move to CSS, then JavaScript, and then React.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        You'll also learn git and GitHub, Figma (a design tool in which
        designers create designs, and give them to developers to create apps).
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Finally, we'll deploy your apps on a public URL. Yes, you will be able
        to send with your apps to anyone.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>How long will it take me to finish it?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        There are 120 video lessons in total. If you study 3 times per week and
        watch 5 lessons every time, it will take you around 2 months.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Of course, I totally recommend not just watching - but practising and
        playing around with the code after every lesson. Practice is what will
        get you the job.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        And in the end, it all depends on you. If work fast you'll finish it in
        a month. On the other side, it can take you 6 months too. Nevertheless,
        it's efficient!
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Will I create some projects?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        Of course! We'll make a beautiful modern website, and you'll be sending
        it to your future employers. We'll also create 2 other apps, one with
        pure JavaScript, and one with React.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Can I just watch YouTube videos for free, why should I pay?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        Sure you can - all of this knowledge is available somewhere online. But
        the thing is - nobody knows where. The tech field is so massive that
        it's gonna be challenging to break into it either way.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        On YouTube, you'll be seeing so many different videos from a countless
        number of teacher - all of them with different teaching styles. And you
        could be lost in all that.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Not only that you won't have a structured content, but you also won't
        have a clue what to learn, and what not to. Meaning, you'll be spending
        a lot of time on learning useless things. And time is money. The price
        for the course is nothing, considering that you will be earning 6
        figures soon. Invest in yourself, that's the highest ROI.
      </Paragraph>
    </RouteContainer>
  );
}

const letsWorkButton = (theme: Theme, alignLeftDesktop?: boolean) => css`
  display: inline;
  ${alignLeftDesktop ? 'align-self: baseline;' : ''}

  padding: 8px;
  border-radius: 2px;
  line-height: 2;

  font-size: 24px;
  color: ${theme.hyperlinkColor};

  background-color: ${theme.hyperlinkBackgroundColor};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media ${Media.Mobile} {
    align-self: center;
  }
`;

export default BreakIntoTech;
