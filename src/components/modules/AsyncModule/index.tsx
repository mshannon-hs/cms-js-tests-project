export function Component({ serverSideProps }: any) {
  const serverValue = serverSideProps.serverValue;
  return (
    <div>
      <div data-test-id={serverValue}>{serverValue}</div>
    </div>
  );
}

export const meta = {
  label: `Async Module`,
};

export const fields = [];

export function getServerSideProps() {
  return {
    serverSideProps: {
      serverValue: 'serverValue',
    },
  };
}
