import * as React from 'react';
import { breakpoint } from '../Styles/CommomStyles';

export const useResponsive = (): boolean => {
  const [isResponsive, setIsResponsive] = React.useState<boolean>(window.innerWidth <= breakpoint);

  const handleResize = () => setIsResponsive(window.innerWidth <= breakpoint);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isResponsive;
};
