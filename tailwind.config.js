module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'modal': 'width ease 1s, height ease 1s, top ease 1s, left ease 1s',
      },
      cursor: {
        'cross': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='64' height='64' fill='none' viewport='0 0 40 40' stroke='gray' stroke-width='2'><path d='M3,3 L21,21 M3,21 L21,3'></path></svg>\") 16 0, auto",
      }
    },
  },
  plugins: [],
}
