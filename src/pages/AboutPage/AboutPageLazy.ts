import { lazy } from 'react';
export const AboutPageLazy = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./AboutPage") as never);
    }, 2000);
  })
});
