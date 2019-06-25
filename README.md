# ShopMate E-commerce App

Solution provided for _Turing Frontend Challenge_

[Hosted publicly at https://turing-next.herokuapp.com/](https://turing-next.herokuapp.com/)

### Key techs used in project

* **React**
* **Redux**
* **Redux-saga** => handle side _effects_ of actions, async operations, generators, powerful
* **nextjs** => framework to bootstrap nodejs(or static) + SSR + React app at light-speed
* **typescript** => dramatically increases development experience, simplifies refactores, prevents simple bugs, and more...
* **styled-components** => most convenient way to _style_ React components

## Project structure
   
* **@common** => common/styled components heavily reused all over the project without much effort (e.g if there are too many props or specific logic component does not belong here)
* **@components** => key components/composition of components for the app, the components used in pages, or in other components
* **@config/@consts** => configuration/constants used all over the project
* **@hooks** => custom resusable React Hooks, specific custom hook would belong to MyComponent/hooks

rest are self-descriptive...]

* **@store**
* **@utils**
* **@api**
* **typings**

## Instructions

1) install

    `yarn`
2) lint

    `yarn lint`

3) type-check

    `yarn type`

4) run dev

    `yarn dev`

5) build

    `yarn build`

6) run built

    `yarn start`