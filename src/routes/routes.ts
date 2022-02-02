import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName:"LazyPage1"*/ '../01-lazy-load/pages/LazyPage1')
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName:"LazyPage2"*/ '../01-lazy-load/pages/LazyPage2')
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName:"LazyPage3"*/ '../01-lazy-load/pages/LazyPage3')
);

export type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy page 1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy page 2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy page 2',
  },
];
