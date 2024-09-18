import { getSecret } from '@hubspot/cms-components';

export function Component({ serverSideProps }: any) {
  const secret = serverSideProps.secretValue;
  return (
    <div>
      <div data-test-id={secret}>{secret}</div>
    </div>
  );
}

export const meta = {
  label: `Async Secret Module`,
};

export const fields = [];

export function getServerSideProps() {
  return {
    serverSideProps: {
      secretValue: getSecret('test_secret'),
    },
  };
}
