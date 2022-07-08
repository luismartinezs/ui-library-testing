# Reddit post

This took a bit more time than I expected.

I tried 6 different UI libraries for React to see which one I like more. I will try to compare them.

These are the libraries I tried, and I will try to rank them (ranks in the end).

- DaisyUI
- React Bootstrap
- ChakraUI
- Tailwind UI
- Flowbite React
- Material UI

I'd also love to hear your thoughts.

Understand what I wrote here is my entirely subjective opinion and I don't claim to be very thorough by any means. This is only a recollection of my first impressions. In my case I've used tailwind for the past 2 years. I'm quick with it and I love it. So if I can use tailwind for me it is a plus. I've also used a bit of bootstrap, that was 3 years ago.

I'm mostly concerned about being able to quickly produce a prototype, which means I want to get as many things out of the box as possible, I don't want to reinvent the wheel. But also, will the UI customizable? That is, even if the first prototype looks generic, if I develop it more and want to customize it, will I be working with or against the UI library?

Ideally:

- Common UI features out of the box, which are simple and quick to use
- Nice looking by default, without requiring customization
- Easy to customize

I've used each to create a simple page with common UI elements. I'm including the time it took me for each library.

I'm also rating the "visual quality", or how nice and smooth the result looked after me doing minimal effort to create the page.

There we go.

### Daisy UI

- Site: https://daisyui.com/
- Github stars: 12.6k
- Cost: free
- Prototyping time: 1:32
- Bundle size: 57.5 kB
- Visual quality: 6
- Productivity: 8
- Customization: 9

Pros:

- It is just tailwind under the hood. It's nothing more than tailwind classes grouped into more general classes, such as `btn`. For example, a button with a loading spinner is just `<button class="btn btn-square loading"></button>`. This means it leverages all the tailwind classes.
- It has many themes coming out of the box, and are really easy to toggle and customize. Creating a new theme is straight forward and they have a tool to do it: https://daisyui.com/theme-generator/
- It doesn't require additional dependencies
- The API is extremely simple and well documented
- The default styles that the library provides are decent looking
- The default styles can be customized with additional tailwind classes, simple as that. Since it's just CSS classes, there's no hidden html elements hidden behind the library and every element can be directly styled.

Cons:

- It's not a React-specific library. Since it's just CSS classes and not React components, it's logicless. This means that any logic must be implemented by me, for example to open and close a modal. They do have a modal that works with a checkbox, that means I would have to re-implement that logic in React. It's mildly annoying. To be fair, there is a react-daisyui library that I didn't try: https://react.daisyui.com/
- That means that creating elements with complex interactions, such as a responsive navbar with collapsible menu, must be pretty much done from scratch.
- Few or no layout utilities. The library itself says layout is handled by tailwind utility classes: https://daisyui.com/docs/layout-and-typography/, I wouldn't mind to see an abstraction over these utility classes, that provide some common layouts out of the box, spacing and things like that.
- No file input or date input styling

### React bootstrap

- Site: https://react-bootstrap.github.io/, https://getbootstrap.com/
- Github stars: 20.9k
- Cost: free
- Prototyping time: 1:04
- Bundle size: 52.5 kB
  - React-bootstrap: 36.7 kB
  - Bootstrap: 15.8 kB
- Visual quality: 7
- Productivity: 10
- Customization: 6

Pros:

- Very easy to setup, all I had to do was install two dependencies and start to use the components
- In general, very quick to work with components out of the box, great for quick prototyping. Most of them are plug-and-play.
- It leverages React, so things like a responsive navigation menu and modals come out of the box. It also does it in a way that is easy to use.
- Still is "The most popular front-end framework". Wide-spread use almost guarantees it will be maintained regularly.
- Using it mostly consists on copy-paste examples from the docs, that's why it's so quick to prototype something.
- Each component also contains other sub-components that are used in combination, for example, the `Card` component also comes with components such as `Card.Img`, or `Card.Title`, in my opinion that improves readability and makes the library easier to use.

Cons:

- Using the library is really using two different libraries: react-bootstrap (built-in components) and bootstrap (utility CSS classes). So the docs are spread over two sites. It can get a bit confusing initially.
- No tailwind, and the class naming actually conflicts with tailwind.
- There is no CSS normalization out of the box
- There are few color classes, additional color classes need to be generated explicitly. In comparison, tailwind offers a ton of color-related utilities.
- The default style looks good, but it (obviously) looks "bootstrap-y". For a tiny minority of projects that will be ok, but for the vast majority of projects, the style will have to be tweaked. This can be done, but from past experience the more the default design needs to be customized, the more annoying it is to work with the library. You will **have** to overwrite the styles. At some point you might be wondering why are you using the library at all, if it's creating more problems than it solves.
- Lots of text utility classes, with decent defaults, but nothing like tailwind-typography.

### ChakraUI

- Site: https://chakra-ui.com/
- Github stars: 27.5k
- Cost: free
- Prototyping time: 1:41
- Bundle size: 180.7 kB
  - chakra-ui/icons: 13.2 kB
  - chakra-ui/react: 113.3 kB
  - emotion/react: 7.3 kB
  - emotion/styled: 4.7 kB
  - framer-motion: 42.2 kB
- Visual quality: 7
- Productivity: 5
- Customization: 8

Pros:

- A11y is a first citizen
- There are lots of layout utility components
- The theme seems easy to customize
- Lots of built-in colors and utilities, almost as many as tailwind (tailwind still wins)

Cons:

- Big bundle size in comparison to other libraries
- **Everything** is a custom component, to the extent where, looking at the examples, there's barely any good old html (or jsx, to be more precise...). To be clear, I can still use "html". Also, every component has tons of props whose only purpose is to define styles. It's almost like for each CSS property there is a prop. So it moves from html and css all the way to react components with props. I'm not sure what to make of it. It feels a bit over-engineered.
- I feel like for everything I want to do, I need to find "the way" to do it with built-in components and their props. That slows me down and frustrates me. It's hard to be productive quickly. Too much learning to do things I already know how to do with fundamental tools. While using this, I was thinking "I hate it".
- I miss some built-in components that I can use right away, such as a card, built-in layouts, footers, or headers.
- There is no CSS normalization out of the box
- The file input looks pretty bad, and the checkbox seems broken.


### Tailwind UI

Note: I used the free tier, which has a very limited number of components. Also, this is not a library, it is a bunch of code snippets with mock data ready to be copy-pasted and manually edited. Also, all my opinions are based on the freebies.

- Site: https://tailwindui.com/
- Github stars: -
- Cost: 249 EUR
- Prototyping time: 2:00. this time is a rough estimation of what would have taken me to build the page. I used the free tier, which has a very limited number of components, so I only built a few of them.
- Bundle size: +22.1 kB
  - headlessui/react: 22.1 kB
  - heroicons/react: ?
- Visual quality: 9
- Productivity: 5
- Customization: 10

Pros:

- It's tailwind, so you can use all tailwind utilities
- The pre-designed templates look really great, that's a great help to make your UI look good as a non-designer.
- It's very "minimal". In conjunction with Headless UI, it is the opposite of chakra-ui. Everything is just regular JSX with tailwind classes, except for a few custom un-styled components from Headless UI
- It is meant to be customized. Every element is in plain sight, and you can modify the styles just by changing css classes.

Cons:

- Theming can be easy or it can be a bit complicated, depending on what you want to do. You'll have to dig through the code and manually change class names.
- It's not free. But it's just one payment, and not overly pricey. You are limited in what you can use this for.
- The fact that it is customizable by design also means that there are no "default" styles that you can just use. You can't use the templates without intensely modifying them.
- The code snippets / components provided are huge, non-reusable out of the box, and need to be split and refactored manually. Tons of tailwind classes can make components look really bloated and hard to read, which also calls for breaking down the snippet into components. To be fair, they say that the code snippets are meant to be refactored into components: https://tailwindui.com/documentation#react-creating-components, still, not exactly quick to use. Not ideal for quick prototyping.


### Flowbite React

- Site: https://flowbite.com/, https://flowbite-react.com/
- Github stars: 2k
- Cost: free
- Prototyping time: 1:10
- Bundle size: +11.6kB
  - flowbite-react: ?
  - flowbite: 11.6kB
- Visual quality: 6
- Productivity: 9
- Customization: 7

Pros:

- "It's just tailwind", at least the non-react version. That means it's easy to work with and customize.
- The examples include classes for the dark theme
- Looks a lot like react-bootstrap in the way custom components are used, it's very simple to use and you can do by mostly copy-pasting from the examples. So, like react bootstrap, it's good for quick prototyping.
- Even if for some reason you don't want to use the react components, you can use the pre-built class sets from vanilla flowbite.

Cons

- The non-react version is just a bunch of pre-made html with tailwind classes, that means it's easy to customize but there's no abstraction whatsoever
- It looks very "bootstrap-y", actually less good-looking than bootstrap (in my opinion!)
- Comparatively less popular
- Poor documentation, with errors, outdated, and no component API (this is the reason I ranked it a bit lower in productivity)
- Theme customization is experimental (for now)
- No text-related utilities or components, which means that you just use tailwind classes and tailwind typography (which, for the record, is great)

### Material UI

- Site: https://mui.com/
- Github stars: 79.7k
- Cost: free
- Prototyping time: 1:42
- Bundle size: 819.6 kB
  - emotion/react: 7.3 kB
  - emotion/styled: 4.7 kB
  - mui/icons-material: 662.2kB
  - mui/material: 131.6kB
  - mui/system: 13.8kB
- Visual quality: 9
- Productivity: 6
- Customization: 8

Pros:

- Very well documented
- Lots of pre-built examples and layouts for components, and it's pretty easy to use by copy pasting examples from the docs
- Very nice and smooth looking for the time it takes to make it (it looks very "google-y" though, for obvious reasons, that could be a good thing or a bad thing)
- Smooth mobile friendly nav bar mostly out of the box
- Button clicks look really great and animated. Clicking those buttons triggers my dopamine.
- Tons of resources: free templates, starter code repos (one of them with tailwind): https://mui.com/material-ui/getting-started/example-projects/

Cons:

- Absolutely ginormous bundle size compared to other options
- Similar to chakra-ui, lots of custom components that raise a bit the learning curve and it takes a bit of time of getting used to be productive ("one more tool to learn"). As with chakra-ui, sometimes I need to learn to use the library to do something I already know how to do with html and css, and that's mildly frustrating.
- Like in chakra-ui, styles seem to be mainly controlled by special props, so it seems I have to learn how these props work before I can apply even some basic styling.
- Each feature requires importing many different components and sub-components, and I'm not sure yet how to feel about that. For example, a "List" will have a "ListItem", a "ListItemText", a "ListItemButton", etc. It feels a bit complex.
- Poor color palette
- Date input seems a bit complicated and requires external packages. I didn't manage to make it work
- There's no file input component (yet)

### Final ratings

- Tailwind UI: 8 / 10
- DaisyUI: 7.7 / 10
- React Bootstrap: 7.7 / 10
- Material UI: 7.7 / 10
- Flowbite React: 7.3 / 10
- ChakraUI: 6.7 / 10