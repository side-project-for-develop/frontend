module.exports = {
  // src파일안에서 app 돌릴예정이라 한줄만 남길게요.
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BMHANNA: ["BM-Hanna", "Noto Sans KR", "sans-serif"],
      },
      // color code
      colors: {
        blue: "#1fb6ff",
      },
      screens: {
        sm: { max: "420px" },
        md: { max: "640px" },
        lg: { max: "960px" },
        xl: { max: "1366px" },
        min_sm: { min: "420px" },
        min_md: { min: "640px" },
        min_lg: { min: "960px" },
        min_xl: { min: "1366px" },
      },
    },
  },
  plugins: [],
};
