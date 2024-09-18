import { getSecret } from '@hubspot/cms-components';

export function Component() {
  const secret = getSecret('test_secret');
  return (
    <div>
      <div data-test-id={secret}>{secret}</div>
    </div>
  );
}

export const meta = {
  label: `Secret Module`,
};

export const fields = [];
