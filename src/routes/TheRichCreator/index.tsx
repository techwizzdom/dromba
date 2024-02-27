import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import Helmetiser from '../../components/core/Helmetiser';
import { H1, H3, H4 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import Paragraph from '../../components/core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';
import { Theme } from '../../styles';
import { css } from 'emotion';
import { Media } from '../../enums/Media';
import { ThemeContext } from '../../context/ThemeContext';
import { t } from '../../translations/t';
import ScrollToTop from '../../util/scrollToTop';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { Link } from 'react-router-dom';
import { Routes } from '../Routes';

function TheRichCreator() {
  const theme = React.useContext(ThemeContext);

  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <ScrollToTop />
      <Helmetiser
        title="The Rich Creator"
        description="Join 'The Rich Creator' community to transform your passion into a thriving career as a content creator or influencer. Our expert-guided platform offers comprehensive strategies and tools to help you succeed with minimal followers. Start your journey towards financial independence and quit your 9-5 job. Discover the art of impactful content creation and social media mastery with us. Ideal for aspiring creators ready to make a mark with almost zero followers."
        url="https://www.techwizzdom.com/the-rich-creator"
      />
      <H1>
        This is the{' '}
        <span style={{ margin: '0 8px', fontFamily: 'Rock Salt' }}>ONLY</span>{' '}
        thing you need to start earning money with content and escape your 9-5.
      </H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Watch the trailer:</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <iframe
        style={{ overflow: 'hidden', width: '100%', aspectRatio: '16/9' }}
        width="100%"
        src="https://www.youtube.com/embed/7LshQuQyZ8I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        A few years ago, I was just a random dude, having a 9-5 coding job in
        Croatia for $1k a month.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        I'm still that random dude, but I work just for myself, have $50k+
        months, own a tech startup, have one of the largest tech socials, a
        clothing brand... Life is amazing.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        I'll keep it short. There was so much I learned (and still learn) on
        this journey, and I was looking for was to share it with other people
        and help them.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        As many others, I launched a course which was a mega-pack of all the
        possible knowledge I have.{' '}
        <a
          href="https://techwizzom.gumroad.com/l/500k-content-wizzard"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline', alignItems: 'center', gap: '8px' }}
        >
          {' '}
          I got so much nice feedback, and it's rated 5.0 on Gumroad.
        </a>
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>But I know I can do better.</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Course is great, but it's still just a course:
        <ul>
          <li>What if you get stuck?</li>
          <li>What if you have some questions?</li>
          <li>What if it seems impossible, and you lose motivation?</li>
          <li>... and so on</li>
        </ul>
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>To address these problems, I converted a course to a community.</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        It's basically the same course + more materials +
        <ul>
          <li>Me, engaging and answering questions</li>
          <li>Me, holding live sessions</li>
          <li>A group of likeminded people going towards the same goal</li>
          <li>A place to share your wins, strategies, problems</li>
          <li>... and much more</li>
        </ul>
        The goal is that you have people around you who are going through the
        same. I was in a similar group when I was quitting my job and the
        support was invaluable.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Yes, course materials were great there, but the community was the thing
        that gave me peace of mind to quit my job - just because I knew that I
        can ask whatever I was and get solutions to any of my problems.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={actionCSS}>
        <a
          className={letsWorkButton(theme, true)}
          href={t.link.theRichCreatorSkool}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out community
        </a>
        <a
          className={letsWorkButton(theme, true, true)}
          href={t.link.theRichCreatorStripe}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get access
        </a>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Also, this is a practical community.</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Meaning, as soon as you're in, you get a detailed onboarding guide. You
        don't watch content for 2 months and do nothing, you start immediately.
        After you're done with onboarding, you have:
        <ul>
          <li>All the socials optimized for win</li>
          <li>
            Active strategy for creating/posting content 3-7x a week (in a most
            efficient way)
          </li>
          <li>
            Automated system that reaches out to 500-1000 brands a month,
            offering your UGC services (this is what will allow you to quit the
            job fast)
          </li>
        </ul>
        You're ready to play big.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>30-day refund period without any reason.</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        If you don't like the community, you can get the full value back. I
        don't want to take your money if you're not happy.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        This is a community of people who are on missions to quit their jobs and
        start living the life they want. It's a community of people who are
        ready to work hard and make serious money by working for themselves.
        It's a community of people who are ready to help each other.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        And if you don't see yourself here, feel free to go :)
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={actionCSS}>
        <a
          className={letsWorkButton(theme, true)}
          href={t.link.theRichCreatorSkool}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out community
        </a>
        <a
          className={letsWorkButton(theme, true, true)}
          href={t.link.theRichCreatorStripe}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get access
        </a>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H3>FAQ</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>What do I get here?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Everything you need to help you become a successful, rich content
        creator:
        <ul>
          <li>Full course about content creation</li>
          <li>Full course about monetization</li>
          <li>
            Real-life-examples of me working (writing scripts, shooting,
            editing, negotiating, ...)
          </li>
          <li>Onboarding plan to know exactly what to do</li>
          <li>Group of likeminded people pushing you toward to same goal</li>
          <li>
            Ability to ask any questions related to your problems, and get
            answers
          </li>
          <li>Me (Tech Wizzdom), answering, engaging, holding live sessions</li>
        </ul>
        This is all evolving and updating all the time.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Is there a refund?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        Of course! You can get a full refund within 30 days without any reason.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Why is it cool to be a content creator?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
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
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        I was a Senior Developer before (now CTO & Co-founder of my own
        startup), so my logical brain is quite developed. On the other hand, I'm
        extremely creative - which made me one of the strongest tech accounts on
        the planet in such a short timeframe. When I combine those two and add
        my passion for teaching, I can assure you that you'll get everything you
        need to become a successful content creator. Of course, everything I'm
        teaching here isn't related to tech at all - that's just my niche. It's
        applicable for everything.
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
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
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
        You can check out the full{' '}
        <Link
          className={linkCss}
          to={Routes.CourseOutline}
          target="_blank"
          rel="noopener noreferrer"
        >
          outline here
        </Link>
        . And the best thing is that you can ask anyone in the community (me
        including) how to reach these goals.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H4>Why should I pay for this?</H4>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        This community is nothing more than an INVESTMENT IN YOURSELF. In life,
        mentors are cheat codes, and the knowledge from this community can
        radically transform your life. You can't even imagine the difference
        between a life where you work a 9-5 you don't like and earn small,
        versus a life where you're only working for yourself, making serious
        money, and helping people. I couldn't imagine the difference until I
        experienced it. These days, it's popular to say that I've "escaped the
        Matrix". And wow, it's gorgeous.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.Large}>
        But I mean, you get a full refund if you don't like it. So, you can't
        lose anything :)
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={actionCSS}>
        <a
          className={letsWorkButton(theme, true)}
          href={t.link.theRichCreatorSkool}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out community
        </a>
        <a
          className={letsWorkButton(theme, true, true)}
          href={t.link.theRichCreatorStripe}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get access
        </a>
      </div>
    </RouteContainer>
  );
}

const linkCss = css`
  text-decoration: underline;
`;

const actionCSS = css`
  display: flex;
  justify-content: space-evenly;
  gap: 16px;

  @media ${Media.Mobile} {
    flex-direction: column;
  }
`;

const letsWorkButton = (
  theme: Theme,
  alignLeftDesktop?: boolean,
  darkGreen?: boolean,
) => css`
  display: inline;
  ${alignLeftDesktop ? 'align-self: baseline;' : ''}

  padding: 8px;
  border-radius: 2px;
  line-height: 2;
  font-weight: 600;

  font-size: 20px;
  color: ${theme.hyperlinkColor};

  background-color: ${darkGreen
    ? theme.darkGreen
    : theme.hyperlinkBackgroundColor};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media ${Media.Mobile} {
    align-self: center;
  }
`;

export default TheRichCreator;
