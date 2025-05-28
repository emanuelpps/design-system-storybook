// tailwind.config.js
export default {
  theme: {
    components: {
      button: {
        base: `
          inline-flex items-center justify-center 
          font-semibold rounded-md transition-colors 
          cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        `,
        variants: {
          primary: `
            bg-primary-500 text-white
            hover:bg-primary-600
          `,
          secondary: `
            bg-secondary-500 text-white
            hover:bg-secondary-600
          `,
          outline: `
            border border-gray-300 bg-transparent
            hover:bg-gray-50
          `,
        },
        sizes: {
          sm: `px-4 py-2 text-sm`,
          md: `px-5 py-2.5 text-base`,
          lg: `px-6 py-3 text-lg`,
        },
      },
    },
  },
};
