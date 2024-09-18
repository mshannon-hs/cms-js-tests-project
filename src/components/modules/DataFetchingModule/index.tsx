import { Island, logInfo } from '@hubspot/cms-components';
import MyIsland from './MyIsland?island';

export function Component(props: { serverSideProps: { answer: string } }) {
  return (
    <div>
      <h1>The answer to life the universe and everything</h1>
      <h2 data-test-id="data-fetching-answer">
        {props.serverSideProps?.answer}
      </h2>
      <Island module={MyIsland} id="my-island" />
    </div>
  );
}

export const meta = {
  label: `Data Fetching Module`,
};

export const fields = [];

export const getServerSideProps = async () => {
  logInfo('getServerSideProps called');

  await new Promise((resolve) => {
    setTimeout(resolve, 250);
  });

  return {
    serverSideProps: {
      answer: '42',
    },
  };
};
