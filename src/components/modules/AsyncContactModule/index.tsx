import { withContact } from '@hubspot/cms-components';

export function Component(props: any) {
  return (
    <div>
      <div data-test-id={props.serverSideProps.contact.email}>
        email: {props.serverSideProps.contact.email}
      </div>
    </div>
  );
}

export const meta = {
  label: `Async Contact Module`,
};

export const fields = [];

export const getServerSideProps = withContact(
  ({ fieldValues: __fieldValues }, { contact }) => {
    return {
      serverSideProps: {
        contact,
      },
      caching: {
        cacheControl: {
          noCache: true,
        },
      },
    };
  }
);
