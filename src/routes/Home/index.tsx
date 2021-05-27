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

import { t } from '../../translations/t';

function Home() {
  const deviceType = useDevice();
  return (
    <RouteContainer>
      <H1>{t.home.title}</H1>
      <H1>{t.home.subtitle}</H1>

      <VerticalSpacing
        height={
          deviceType === DeviceType.Mobile
            ? VerticalSpacingHeight.Xlarge
            : VerticalSpacingHeight.Giant
        }
      />

      <H5>{t.home.paragraph.achiever}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>{t.home.paragraph.summary}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <IndentContainer>
        <TimelineCard
          title={t.home.timelineCardOrbitalWitness.title}
          subtitle={t.home.timelineCardOrbitalWitness.subtitle}
        >
          {t.home.timelineCardOrbitalWitness.text.pt1}
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          {t.home.timelineCardOrbitalWitness.text.pt2}
          <Hyperlink href={t.link.orbitalWitness}>{t.company.orbitalWitness}</Hyperlink>
          {t.home.timelineCardOrbitalWitness.text.pt3}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardProductive.title}
          subtitle={t.home.timelineCardProductive.subtitle}
        >
          {t.home.timelineCardProductive.text.pt1}
          <Hyperlink href={t.link.infinum}>{t.company.infinum}</Hyperlink>
          {t.home.timelineCardProductive.text.pt2}
          <Hyperlink href={t.link.productive}>{t.company.productive}</Hyperlink>
          {t.home.timelineCardProductive.text.pt3}
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          {t.home.timelineCardProductive.text.pt4}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardInfinum.title}
          subtitle={t.home.timelineCardInfinum.subtitle}
        >
          {t.home.timelineCardInfinum.text.pt1}
          <Hyperlink href={t.link.loopCommunity}>
            {t.company.loopCommunity}
          </Hyperlink>
          {t.home.timelineCardInfinum.text.pt2}
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          {t.home.timelineCardInfinum.text.pt3}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardOptimIT.title}
          subtitle={t.home.timelineCardOptimIT.subtitle}
        >
          {t.home.timelineCardOptimIT.text.pt1}
          <Hyperlink href={t.link.a1}>{t.company.a1}</Hyperlink>
          {t.home.timelineCardOptimIT.text.pt2}
          <Hyperlink href={t.link.tomato}>{t.company.tomato}</Hyperlink>
          {t.symbol.dot}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardAsseco.title}
          subtitle={t.home.timelineCardAsseco.subtitle}
        >
          {t.home.timelineCardAsseco.text.pt1}
          <Hyperlink href={t.link.asseco}>{t.company.asseco}</Hyperlink>
          {t.home.timelineCardAsseco.text.pt2}
          <VerticalSpacing height={VerticalSpacingHeight.Small} />
          {t.home.timelineCardAsseco.text.pt3}
          <Hyperlink href={t.link.pbzMobileBankingApp}>
            {t.app.pbzMobileBankingApp}
          </Hyperlink>
          {t.home.timelineCardAsseco.text.pt4}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardOptimITInt.title}
          subtitle={t.home.timelineCardOptimITInt.subtitle}
        >
          {t.home.timelineCardOptimITInt.text.pt1}
        </TimelineCard>
      </IndentContainer>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <H5>{t.home.paragraph.education}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />

      <IndentContainer>
        <TimelineCard
          title={t.home.timelineCardMaster.title}
          subtitle={t.home.timelineCardMaster.subtitle}
        >
          {t.home.timelineCardMaster.text.pt1}
          <Hyperlink href={t.link.masterStudies}>{t.study.master}</Hyperlink>
          {t.symbol.dot}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardExchange.title}
          subtitle={t.home.timelineCardExchange.subtitle}
        >
          {t.home.timelineCardExchange.text.pt1}
          <Hyperlink href={t.link.exchangeStudies}>
            {t.study.exchange}
          </Hyperlink>
          {t.home.timelineCardExchange.text.pt2}
        </TimelineCard>

        <TimelineCard
          title={t.home.timelineCardBachelor.title}
          subtitle={t.home.timelineCardBachelor.subtitle}
        >
          {t.home.timelineCardBachelor.text.pt1}
          <Hyperlink href={t.link.bachelorStudies}>
            {t.study.bachelor}
          </Hyperlink>
          {t.home.timelineCardBachelor.text.pt2}
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
        {t.home.paragraph.sourceCode.pt1}
        <Hyperlink href={t.link.sourceCode}>{t.core.sourceCode}</Hyperlink>
        {t.home.paragraph.sourceCode.pt2}
      </H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>{t.home.paragraph.jsSkills.pt1}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>{t.home.paragraph.engineeringSkills}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>{t.home.paragraph.otherSkills}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>{t.home.paragraph.hobbies}</H5>

      <VerticalSpacing height={VerticalSpacingHeight.Medium} />

      <H5>
        {t.home.paragraph.profiles.pt1}
        <Hyperlink href={t.link.twitter}>{t.profile.twitter}</Hyperlink>
        {t.home.paragraph.profiles.pt2}
        <Hyperlink href={t.link.devto}>{t.profile.devto}</Hyperlink>
        {t.home.paragraph.profiles.pt2}
        <Hyperlink href={t.link.linkedIn}>{t.profile.linkedIn}</Hyperlink>
        {t.home.paragraph.profiles.pt2}
        <Hyperlink href={t.link.github}>{t.profile.github}</Hyperlink>
        {t.home.paragraph.profiles.pt3}
        <Hyperlink href={t.link.medium}>{t.profile.medium}</Hyperlink>
        {t.home.paragraph.profiles.pt4}
        <Hyperlink href={t.email.dvidovic} isEmail={true}>
          {t.email.dvidovic}
        </Hyperlink>
        {t.home.paragraph.profiles.pt5}
      </H5>
    </RouteContainer>
  );
}

export default Home;
