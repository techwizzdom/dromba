import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import { H1 } from '../../components/core/Heading';
import TimelineCard from '../../components/TimelineCard';
import IndentContainer from '../../components/IndentContainer';

function Home() {
  return (
    <RouteContainer>
      <H1>Aspiring Frontend developer.</H1>
      <H1>Based anywhere on this planet.</H1>
      <IndentContainer>
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
        />
      </IndentContainer>
    </RouteContainer>
  );
}

export default Home;
