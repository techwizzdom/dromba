import React from 'react';

import TimelineCard from '../../components/TimelineCard';
import RouteContainer from '../../components/RouteContainer';

import ProductiveLogo from '../../assets/images/productive-logo.png';
import InfinumLogo from '../../assets/images/infinum-logo.png';
import AssecoLogo from '../../assets/images/asseco-logo.png';

function Timeline() {
  return (
    <RouteContainer>
      <TimelineCard
        title="Productive"
        subtitle="Aug 2019 - still here"
        description="Curabitur eget eros eros. Mauris laoreet justo vel facilisis fermentum. Aliquam venenatis pellentesque elit, at ornare ex tempor et. Fusce molestie sagittis bibendum. Quisque nec purus id urna volutpat rhoncus. Cras sit amet nulla ligula. Fusce maximus sed leo eu condimentum. Curabitur id dui id tortor consectetur mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sit amet tincidunt libero. Fusce maximus lectus."
      />
      <TimelineCard
        title="Infinum"
        subtitle="Feb 2019 - still here"
        description="Curabitur eget eros eros. Mauris laoreet justo vel facilisis fermentum. Aliquam venenatis pellentesque elit, at ornare ex tempor et. Fusce molestie sagittis bibendum. Quisque nec purus id urna volutpat rhoncus. Cras sit amet nulla ligula. Fusce maximus sed leo eu condimentum. Curabitur id dui id tortor consectetur mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sit amet tincidunt libero. Fusce maximus lectus."
      />
      <TimelineCard
        title="Asseco SEE"
        subtitle="Jan 2017 - July 2017"
        description="Curabitur eget eros eros. Mauris laoreet justo vel facilisis fermentum. Aliquam venenatis pellentesque elit, at ornare ex tempor et. Fusce molestie sagittis bibendum. Quisque nec purus id urna volutpat rhoncus. Cras sit amet nulla ligula. Fusce maximus sed leo eu condimentum. Curabitur id dui id tortor consectetur mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sit amet tincidunt libero. Fusce maximus lectus."
        isLastCard={true}
      />
    </RouteContainer>
  );
}

export default Timeline;
