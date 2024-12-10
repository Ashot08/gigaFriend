import { lazy } from 'react';
export const NavigationLazy = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Navigation") as never);
    }, 2000);
  })
});
