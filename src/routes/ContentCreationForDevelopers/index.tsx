import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import Helmetiser from '../../components/core/Helmetiser';
import { H1, H3 } from '../../components/core/Heading';
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
import PricingBlockItem from '../../components/PricingBlockItem';
import DevsDiagram from '../../assets/images/devs.jpg';

function TheRichCreator() {
  const theme = React.useContext(ThemeContext);
  const smoothScrollToPricing = () => {
    const pricingElement = document.getElementById('trc-pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <ScrollToTop />
      <Helmetiser
        title="Content Creation For Developers"
        description="A unique opportunify for developers to make extra money with content. With all the layoffs, making side money is a necessity."
        url="https://www.techwizzdom.com/content-creation-for-developers"
      />
      <H1>
        Use your existing dev skills to make money with content.{' '}
        <span
          style={{ margin: '0 8px', fontFamily: 'Rock Salt', color: '#228a00' }}
        >
          ONLY
        </span>{' '}
        for developers. No followers needed.
      </H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      {/* <H3>Watch the trailer:</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} /> */}
      {/* <iframe
        style={{ overflow: 'hidden', width: '100%', aspectRatio: '16/9' }}
        width="100%"
        src="https://www.youtube.com/embed/ByzRM4FQzyw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
      {/* <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={actionCSS}>
        <button
          className={letsWorkButton(theme, true)}
          onClick={smoothScrollToPricing}
        >
          Join me!
        </button>
      </div> */}
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        Layoffs are all around you. Today, it's not a nice bonus to have a side
        hustle - it's a necessity. Luckily, you don't have to start from zero;
        you can leverage your existing dev skills in a unique way. Not a lot of
        people do it, and that's why it's so powerful.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Wait, what will we actually do?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        To understand why is this so powerful, you need to understand the
        problem.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        Tech brands realized the power of a strong social media presence - it's
        the best marketing tool these days. Somebody needs to make content for
        them.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>But there are so many creators, why do they need me?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        Because of this simple fact: only developers can make content for
        developers. You know how terrible it sounds when non-devs speak about
        things like programming languages - it's noticeable immediately!
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        And that's pretty awesome for you, because there also are not so many
        devs who can also create content. You know that devs are usually pretty
        logical, which helps in coding, but not that much with content. So, if
        you can do both, you're extremely rare and needed. And as a consequence,
        paid well. Let me explain that with a diagram:
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={DevsDiagram}
          alt="Why are developers content creators paid so well"
          style={{ maxWidth: '800px', width: '100%' }}
        />
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>How much do they pay?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        For a single short-form video, you usually get $75-$300. And those are
        videos that you see all around TikTok or IG Reels. Just short, 20
        seconds videos explaining some coding tips and tricks, showcasing a
        tool, throwing dev jokes, etc.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        And when you get into the game, you can do 10 videos in a day. Do the
        math...
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        When I was quitting my job, I had only 2 regular clients - I was doing
        10 videos per week for the 1st one, and 5 videos per week for the 2nd
        one. First one was paying $75 per video, other $150.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        That was 60 videos in total for $6000. And it took me 6 days in a month
        to do it. $1000 per day, and that was just the start. Devs who can also
        create content are way more needed than devs who are just... Devs.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>But how do you mean that I don't need followers?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        You are not promoting brands here - you are just creating videos that
        they will post on their socials. For that, you need to know how to
        create content, find brands, and sell it to them. Your followers count
        doesn't matter here.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>Ok, but how to find those brands who need content?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        That's the core reason why this exists. Together, we will build a fully
        automated system where you will find rich tech brands that need content,
        and then send automated messages to 500-1000 brands per month.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        And I made it in a way that's super easy to follow; and it's also super
        practical - I share my screen most of the time while building the
        system. It's kinda like a coding tutorial lol. You build everything with
        me while you watch.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>What else is inside?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        As I've said, this is a super practical guide that you can just follow
        as you go through it. Inside is:
        <ul>
          <li>
            Making an efficient content strategy (ideas, script writing,
            shooting, editing, ...),
          </li>
          <li>Finding rich tech brands that need content,</li>
          <li>
            Spinning up a system where you reach 500-1000 of those brands per
            month, in a fully automated way.
          </li>
        </ul>
        I'm not just speaking and sharing some theory. After you're done with
        watching, you have the system for yourself.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={actionCSS}>
        <button
          className={letsWorkButton(theme, true)}
          onClick={smoothScrollToPricing}
        >
          Join me!
        </button>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>How do I know that this is for me?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>Try to imagine this:</Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        You shoot a couple of videos, do some screen recordings. You talk about
        dev things, in all different ways you can imagine - whether that's a
        joke or education.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        After shooting, you edit those 7 videos, and send them to the brand.
        Next to it, you also send an invoice for $1050 for all the work.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        Can you imagine yourself doing so? If you can, perfect, this is exactly
        for you. This will make you the core system needed to achieve this
        result efficiently.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>
        If this works so perfectly, why do you share it? Why don't you just do
        it and make all the money?
      </H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        I am doing this lol. But I don't have an infinite amount of time. There
        are so many tech brands that need content, and so few devs that can
        actually do it.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        Coding market is obviously in a crisis and I found a way to help some
        devs who want to jump into these creative areas. It's a massive
        opportunity, and we can all do well.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        If you can combine tech and creativity, you'll be doing extremely well
        because it's so rare and needed. And if you don't do it, well, somebody
        else will.
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H3>I still have some questions. Where should I ask them?</H3>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <Paragraph size={ParagraphSize.XMedium}>
        Just drop me an email directly at dom@techwizzdom.com. Ask me anything
        :)
      </Paragraph>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div id="trc-pricing" className={pricingWrapperCss}>
        <div className={pricingItemCss(theme)}>
          <H3>Course + mentoring</H3>
          <H3>
            <span style={{ textDecoration: 'line-through' }}>$339</span> $297
          </H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem large>
              Building an efficient content creation system
            </PricingBlockItem>
            <PricingBlockItem large>
              Writing scripts, shooting, editing, negotiating, ...
            </PricingBlockItem>
            <PricingBlockItem large>
              Finding rich tech brands that need content
            </PricingBlockItem>
            <PricingBlockItem large>
              Creating a fully automated system for reaching 500-1000 brands per
              month
            </PricingBlockItem>
            <PricingBlockItem large>
              All the tools and video materials
            </PricingBlockItem>
            <PricingBlockItem large>
              <strong>
                1 mentoring call with me - ask me anything and make sure you did
                it properly
              </strong>
            </PricingBlockItem>
          </div>
          <div className={actionCSS}>
            <a
              href={t.link.contentCreationForDevelopers}
              className={letsWorkButton(theme, true, true)}
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Course only</H3>
          <H3>
            <span style={{ textDecoration: 'line-through' }}>$123</span> $99
          </H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem large>
              Building an efficient content creation system
            </PricingBlockItem>
            <PricingBlockItem large>
              Writing scripts, shooting, editing, negotiating, ...
            </PricingBlockItem>
            <PricingBlockItem large>
              Finding rich tech brands that need content
            </PricingBlockItem>
            <PricingBlockItem large>
              Creating a fully automated system for reaching 500-1000 brands per
              month
            </PricingBlockItem>
            <PricingBlockItem large>
              All the tools and video materials
            </PricingBlockItem>
            <PricingBlockItem large isError>
              You're all alone here
            </PricingBlockItem>
          </div>
          <div className={actionCSS}>
            <a
              href={t.link.contentCreationForDevelopers}
              className={letsWorkButton(theme, true, true)}
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </RouteContainer>
  );
}

const actionCSS = css`
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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
  border-radius: 16px;
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

const pricingItemDescriptionCss = css`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const pricingWrapperCss = css`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: flex-start;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const pricingItemCss = (theme: Theme) => css`
  position: relative;
  border: 4px solid ${theme.textColor};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export default TheRichCreator;
