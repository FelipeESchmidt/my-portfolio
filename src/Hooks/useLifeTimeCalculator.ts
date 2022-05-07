import { useResponsive } from './useResponsive';

export const useLifeTimeCalculator = (
  offsetStartBase: number,
): { calcOffset: Function; calcSpeed: Function } => {
  const isResponsive = useResponsive();

  const speedBase = isResponsive ? 0.33 : 0.4;
  const offsetBase = isResponsive ? 0.28 : 0.34;
  const offsetStart = isResponsive ? offsetStartBase - 0.1 : offsetStartBase;

  const calcOffset = (i: number) => offsetStart + (i % 3) * offsetBase + Math.trunc(i / 3);
  const calcSpeed = (i: number) => speedBase * (i % 3);

  return { calcOffset, calcSpeed };
};
