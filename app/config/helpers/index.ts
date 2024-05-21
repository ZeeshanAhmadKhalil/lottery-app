import { Duration } from 'luxon';

const getTimer = (nextDraw: number) => {
  if (nextDraw && nextDraw < 0) return '00:00:00';

  const duration = Duration.fromObject({ seconds: nextDraw });

  const formatted = duration.toFormat('hh:mm:ss');

  return formatted;
};
const toPascalCase = (string: string) => {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

export { getTimer, toPascalCase };
