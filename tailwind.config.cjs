/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const fontSize = {};
const spacing = {};

[...Array(200).keys()].forEach((v) => {
  fontSize[`${v}px`] = `${v}px`;
});

[...Array(2000).keys()].forEach((v) => {
  spacing[`${v}px`] = `${v}px`;
});

const serialNumToRem = (length = 100) => {
  const rems = {};
  [...Array(length).keys()].forEach((v) => {
    rems[v] = `${v / 16}rem`;
  });
  return rems;
};

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: "#e6e6e6",
      },
    },
  },
  plugins: [],
};
