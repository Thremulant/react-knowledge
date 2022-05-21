import { IOption } from "../models";

export const topicsCollection: IOption[] = [
  { name: "HTML, CSS and Vanilla JS knowledge", score: 1, enabled: false, desc: 'Basic stuff' },
  { name: "CRA setup", score: 1, enabled: false, desc: 'Cloning and starting your own components' },
  { name: "Basic JSX syntax", score: 1, enabled: false, desc: 'Render variables, text interpolation, handling lists (map)' },
  { name: "Component creation", score: 1, enabled: false, desc: 'Preferable functional, but understanding classes is a must (old projects)' },
  { name: "Props and Children", score: 1, enabled: false, desc: 'Parent/children structure, componsition and similar concepts' },
  { name: "State", score: 1, enabled: false, desc: 'At least useState and useEffect hooks' },
  { name: "Conditional render", score: 1, enabled: false, desc: 'Logical operators IF and AND' },
  { name: "React router", score: 1, enabled: false, desc: 'Adding a Switch and controlling Routes' },
  { name: "Lifecycle methods", score: 1, enabled: false, desc: 'Knowing they exist' },
  { name: "Error boundary", score: 2, enabled: false, desc: 'Setting it up and controlling the error display' },
  { name: "State management library", score: 2, enabled: false, desc: 'Context, Redux, Zustand, etc.' },
  { name: "More hooks!", score: 2, enabled: false, desc: 'useMemo and useCallback hooks' },
  { name: "Controlled and Uncontrolled components", score: 2, enabled: false, desc: '' },
  { name: "Typescript", score: 3, enabled: false, desc: 'Configuring it and creating stricted typed components' },
  { name: "Testing components", score: 3, enabled: false, desc: 'Using React-Testing Library, Jest or both' },
  { name: "Adding a CSS Framework", score: 2, enabled: false, desc: 'Bootstrap, TailwindCSS, Chakra, etc. But not from the CDN' },
  { name: "Customizing component styles", score: 2, enabled: false, desc: 'Styled-Components or JSS' },
  { name: "Bundler configuration", score: 3, enabled: false, desc: 'Tweeking Webpack' },
  { name: "Create your custom hooks", score: 2, enabled: false, desc: 'Self explanatory' },
  { name: "Storybook", score: 3, enabled: false, desc: 'Installing it and creating components and stories' },
  { name: "React Suspense and Lazy", score: 2, enabled: false, desc: 'Splitting your code in Lazy mode and having your Suspense show something' },
  { name: "Mocking services for tests purposes", score: 2, enabled: false, desc: 'i.e. Overwriting the render to add a ThemeProvider to React Testing Library, or mocking an entire library' },
  { name: "Server-side rendering", score: 3, enabled: false, desc: 'Creating your app with this configuration' },
  { name: "Rewiring React", score: 3, enabled: false, desc: 'Rewiring without breaking CRA' },
  { name: "Frameworks like NextJS or Gatsby", score: 2, enabled: false, desc: 'You will try it some day!' },
  { name: "Creating your own component\\'s library ", score: 3, enabled: false, desc: 'Using Storybook to create and mantain a package that you can install in other projects' },
];