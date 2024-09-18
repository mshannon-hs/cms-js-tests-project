import { UnstableModule } from '@hubspot/cms-components';

export default function CmsModulePartial() {
  return (
    <div>
      <UnstableModule name="moduleWithinPartial" path="@hubspot/button" />
    </div>
  );
}
