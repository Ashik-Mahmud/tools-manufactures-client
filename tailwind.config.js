module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {}, 
      fontFamily: {
        poppins: ['poppins', 'montserrat'],
        montserrat: ['montserrat', 'poppins'],
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: ["winter", "night", ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "winter",
    },
}