import { useAfterIslandHydration } from '@hubspot/cms-components';
import buttonStyles from './button.module.css';
import image from './image.png';

export default function Button({
  clicks,
  onClick,
  testIdSuffix = '',
}: {
  clicks: number;
  onClick: () => void;
  testIdSuffix: string;
}) {
  const afterIslandHydration = useAfterIslandHydration();
  return (
    <div>
      <div
        data-test-id={`hydration-status${testIdSuffix}`}
        data-value={afterIslandHydration}
      >
        {afterIslandHydration ? 'afterHydration' : 'beforeHydration'}
      </div>
      <img src={image} />
      <div>Clicks: {clicks}</div>
      <div
        data-test-id={`click-counter${testIdSuffix}`}
        data-clicks={clicks}
      ></div>
      <button
        className={buttonStyles.button}
        data-test-id={`button${testIdSuffix}`}
        onClick={onClick}
      >
        Click
      </button>
    </div>
  );
}
