# darkpeak-component-library

![CI](https://github.com/andy-c-jones/darkpeak-component-library/actions/workflows/ci.yml/badge.svg)
![Package](https://github.com/andy-c-jones/darkpeak-component-library/actions/workflows/npm-publish-github-packages.yml/badge.svg)

A React component library for Dark Peak Development which uses an atomic design system.

To start contributing `npm run storybook` in your terminal.

This will launch the following portal:
![readme](readme.jpg)

Reuse of this library outside of this organisation is not the intended use but if you do like the look of it, feel free to fork it and change the font and colours in the theme to suit your brand.

Go to `tailwind.config.ts` and edit away

```
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        ...
      },
    },
    colors: {
      primary: {
        default: '#4f46e5',
        accent: '#818cf8'
      },
      secondary: {
        default: '#e7e5e4',
        accent: '#f5f5f4'
      },
      tertiary: {
        default: '#2563eb',
        accent: '#60a5fa'
      } ,
      white: '#ffffff',
      black: '#000000',
      ...
    }
```
