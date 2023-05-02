import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import Helmetiser from '../../components/core/Helmetiser';
import { H3, H4 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import Paragraph from '../../components/core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';
import { Theme } from '../../styles';
import { css } from 'emotion';
import { Media } from '../../enums/Media';
import { ThemeContext } from '../../context/ThemeContext';
import { t } from '../../translations/t';

function ContentWizzard() {
  const theme = React.useContext(ThemeContext);

  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <Helmetiser
        title="Content Wizzard: Become A $500k Creator"
        description="Quit your job and become a higlhy paid content creator. "
        url="https://www.domagojvidovic.com/500k-content-wizzard"
      />
      <H3>Watch the trailer:</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <iframe
        style={{ overflow: 'hidden', width: '100%', aspectRatio: '16/9' }}
        width="100%"
        src="https://www.youtube.com/embed/ByzRM4FQzyw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>
        In a year and a half, a built a solo content creation business earning
        $500k in annual revenue.
      </H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        This number just keeps growing.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        CLICK TO EARN BIG
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H3>Today, I live what people call "a dream life".</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        I work just for myself. I can afford whatever I want. I'm a digital
        nomad; I can be anywhere I want in the world. I can work anytime I want.
        And it's all powered - by the content.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        QUIT YOUR JOB
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H3>This life is gorgeous, and I want to teach you the same.</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Life is too short to settle down for something you don't like. Or for
        something that's "just acceptable". Nothing is a lot. $500k a year isn't
        a lot. Or $5M. Well, $50M neither. Whatever you commit to, you can
        achieve. Only our minds label things as small or big - on a larger
        scale, everything is the same. The Universe doesn't care if you earn
        $100 or $100M a month.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <a
        className={letsWorkButton(theme, true)}
        href={t.link.zeroKnowledgeToJob}
        target="_blank"
        rel="noopener noreferrer"
      >
        START PLAYING AROUND
      </a>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H3>Work life balance is bullshit.</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        There should be no distinction between work and life. If you like what
        you do, you just play around and make money. On that journey, you help
        people too - and it's deeply satisfying.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Are you excited every morning when you wake up, and can't wait to start
        working?
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Would you work with a smile on Sunday 10PM?
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        Do you "love Mondays"? Do you "hate Fridays"?
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        If you answered "no" to at least one of these, what you do IS NOT FOR
        YOU. When I was working for other people, my answers to all of these
        were A STRONG NO. And that just wasn't the life I wanted to live.
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
      <H3>
        In this course, I'll teach you everything I know about content, social
        media, and monetisation. I learn every day, and the course is updated
        with the latest knowledge; you'll have lifetime access. I want you to
        STOP WORKING and START PLAYING AROUND AND MAKING SERIOUS MONEY. Life is
        too short for anything else.
      </H3>
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
      <H3>FAQ</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Why is it cool to be a content creator?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        There are so many reasons:
        <ul>
          <li>You have all the money you need</li>
          <li>You have the freedom</li>
          <li>You enjoy every single day</li>
          <li>You ARE YOURSELF</li>
        </ul>
        You don't need to pretend and wear multiple masks for different
        occasions: jobs, "friends", etc. You are yourself, focused on yourself,
        and living a gorgeous life worth living. EVERY DAY FEELS LIKE A
        VACATION. But even better, because you're "working", plus making money
        and helping people on the side, which is deeply fulfilling.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Why should I trust you?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        I was a Senior Developer up until recently, so my logical brain is quite
        developed. On the other hand, I'm extremely creative - which made me one
        of the strongest tech accounts on the planet in such a short timeframe.
        When I combine those two and add my passion for teaching, I can assure
        you that you'll get everything you need to become a successful content
        creator. Of course, everything I'm teaching here isn't related to tech
        at all - that's just my niche. It's applicable for everything.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        I'm in a network of extremely successful content creators, I have
        mentors, I have so much wizzdom based on my own experience. In the
        simplest way possible, I want you to embody the knowledge - and make it
        wizzdom for yourself.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>You're cool! What will I learn?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        Well, basically EVERYTHING you need to become a top content creator:
        <ul>
          <li>Growing to wild numbers on socials</li>
          <li>Making perfect content</li>
          <li>The mindset you need to have to achieve anything</li>
          <li>Making serious money</li>
          <li>... and way more</li>
        </ul>
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Small} />
      <Paragraph size={ParagraphSize.Large}>
        You can check out the full outline here.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Why should I pay for this?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Medium} />
      <Paragraph size={ParagraphSize.Large}>
        This course is nothing more than an INVESTMENT IN YOURSELF. In life,
        mentors are cheat codes, and the knowledge from this course can
        radically transform your life. You can't even imagine the difference
        between a life where you work a 9-5 you don't like and earn small,
        versus a life where you're only working for yourself, making serious
        money, and helping people. I couldn't imagine the difference until I
        experienced it. These days, it's popular to say that I've "escaped the
        Matrix". And wow, it's gorgeous.
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

  font-size: 20px;
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

export default ContentWizzard;
