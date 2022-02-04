import { ComponentType, lazy, LazyExoticComponent } from 'react';
import { NoLazyLoad } from '../01-lazy-load/pages/NoLazyLoad';

const LazyLayout = lazy(() => import('../01-lazy-load/layout/LazyLayout'));

// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName:"LazyPage1"*/ '../01-lazy-load/pages/LazyPage1')
// );
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName:"LazyPage2"*/ '../01-lazy-load/pages/LazyPage2')
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName:"LazyPage3"*/ '../01-lazy-load/pages/LazyPage3')
// );

export type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    Component: LazyLayout,
    name: 'Dashboard',
    path: '/lazyload/*',
    to: '/lazyload/',
  },
  {
    Component: NoLazyLoad,
    name: 'No lazy',
    path: 'nolazy',
    to: 'nolazy',
  },
];
