# Reddit comments

- Requiring external packages (e.g. a date picker) is good to not get stuck in a specific library
- Bundle size doesn't matter if it supports tree shaking
- MUI gives a design system, if I'm ok with material design and no need to customize it, it's great
- I recommend not to use any UI library, because they have specific design guideline and overriding their styles and features is not flexible. If your project is small and doesn't require brand design, go with one of them
- Bundle size is not important if I know users will be few and will have powerful systems (e.g. internal dashboards)
- Unstyled accessible primitive components from Radix UI, React-Aria, Reakit
- https://bootswatch.com/ quick bootstrap customization
- MUI tree shaking doesn't seem to work well
- MUI is way over-engineered, theming is a pain, nothing is conventional
- Learning a UI library can take longer than building prototype from scratch
- Logicless in UI libs is NOT a con. When a UI library takes control over when a modal is open or closed, or what tab is selected, it prevents me from creating deeplinks or having side-effects that close a modal on my user's behalf. UI libraries should always be logicless.
- A11y can be really important to fulfill legal requirements (e.g. ADA compliance)
- 3 main UI lib classes:
  - tailwind, and basically tailwind extensions like daisyUI and Flowbite. Take 0 effort to customize
  - Component libraries like MUI, Chakra, or NextUI that are usually much harder to customize
  - Headless components like HeadlessUI and RadixUI, provide no styling. You can style them any way you want
- Comparison of MUI and ChakraUI https://engineering.udacity.com/choosing-the-right-component-library-for-your-design-system-mui-vs-chakra-45c4c949d150
  - Theming MUI is tedious
  - MUI build time is slower
- ChakraUI
  - Style props (or an SX prop) allows you to write util-first styles, similar to Chakras classes, but provides more flexibility
  - Styles are defined in this order: 1/ In the theme, 2/ Via layout components (Flex, Stack, etc), 3/ As style props
  - For CSS normalization you need to provide a theme. Theming is a very powerful feature
  - Offers pretty much every component you'd ever need, and they're all very well designed and documented
  - Atomic components allows for more customization, and it takes less time to learn their API than to built it yourself
  - Chakra's (actually styled-system's) style props are basically better Tailwind, because you get linting and typechecking for free, instead of doing string-driven development with class names
  - ChakraUI RFC points
    - Very atomic. I could see wanting something more opinionated if your goal is to get up and running quickly, but I'm looking to migrate a very large application with a lot of specific design specs, so flexibility is king.
    - Pretty much every component you'd need, including some I don't see very often, like Skeleton and Pin Input.
    - Components are very well designed and documented.
    - Decent aesthetics out of the box without looking like Bootstrap or Material (both of which I think have worn out their welcome).
    - Great community support to fill in the gaps where a component you need isn't provided (e.g. I recently needed a multiselect that could load options asynchronously and had no trouble finding one).
    - Great accessibility out of the box.
    -Provides support for most common transitions (don't need to fiddle with toggling classes).
    -The extent to which you're able to extend themes is daunting but extremely powerful. You can make these components look pretty much however you want without having to employ a lot of css hacks.
    -The built-in theme provider makes offering dark and light modes trivial.
    -Compatible with React Hook Form (technically they all are with enough work, but trying to use MUI with RHF felt like shoving a square peg through a round hole).


Other contenders:

- Bulma CSS
- Pure CSS
- Styled components https://styled-components.com/ **
- antd (https://ant.design/) *
  - Not so great in a11y
  - Not so great English docs
  - Not so great responsiveness, two separate UI libs for mobile and desktop
  - Slower compilation time due to big bundle size
- Mantine (https://mantine.dev/) *****
  - Mantine author seems to pay people to praise their library in reddit
- PrimeReact ** - good for Admin, dashboards
- Framework 7 React - good for mobile
- Fluent UI - by microsoft - I didn't love it, docs are not inituitive.
- Atlaskit by Atlassian - has interesting different components compared to others. (emojis, pickers, comment ...)
- React Suite, React Rainbow , Blueprint, Evergreen, Zendesk Garden, Kiwi UI, FomanticUI ( maintained fork version of SemanticUI)
but I think some of them are getting old *, I want to mention some new modern UI libraries also.
- Next UI - has beautiful ui components and made with modern css-in-ts styling lib - - Stiches.js. but lacks on complex components - table, select ... it is new
- Arco Design - looks like Ant Design but its components are more beautiful
- Semi.design - looks much promising ( having infinite loading virtualized table is big thing for me and You can't find delayed loading button in other UIs beside it)
- Unstyled components: Radix UI, React-Aria, Reakit, HeadlessUI
- https://www.gustui.com/
- SemanticUI
- Grommet
- Web component libraries: Carbon, Shoelace, Spectrum... lighter-weight