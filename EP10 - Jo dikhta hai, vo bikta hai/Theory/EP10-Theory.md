1) Explore the ways of writing CSS.
=> TailWind, Sass/ SCSS, MUI, Styled components etc.

2) How do we configure Tailwind?
=> According to the bundler/ framework/ library we are using, steps of tailwind installation are mentioned in official docs. Refer to the link: https://tailwindcss.com/docs/installation/framework-guides

3) In tailwind.config.js What does all keys mean? (content, theme, extend, plugins,...)
=> 
(i) Content: 
- type of the files in which we will use tailwind classes (.html/.js/.jsx/.ts/.tsx etc)
(ii) theme & extend: 
- we can customize/ extend certain properties such as font-family, colors etc which are not available in tailwind via built-in classes.
- E.g: theme: {
    extend: {
      colors: {
        "tangerine-faint": "#eed2c1",
        "tangerine-deep": "#f57126",
      },
      fontFamily: {
        display: "Outfit, sans-serif"
      }
    },
  },
(iii) plugins:
- refer to the link: https://tailwindcss.com/docs/plugins

4) Why do we have .postcssrc file?
=> https://www.freecodecamp.org/news/what-is-postcss/