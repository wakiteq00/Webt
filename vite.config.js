module.exports = {
  // Set the base URL for the project
  base: "/",
  //root directory
  root: "./src",
  // Configure the dev server
  server: {
    port: 3000,
  },

  // Configure the build output
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "./src/index.html", // This is the entry point of your app
        page1: "./src/about.html", //about page
        page2: "./src/contact.html", //contact page
        page3: "./src/login.html", //login page
        page4: "./src/signup.html", //signup page
        page5: "./src/forgot-password.html", //forgot password page
        page6: "./src/post.html", // singlr post page
        page7: "./src/blog.html",//Blog Page
      },

      output: {
        entryFileNames: "[name].[hash].js", // This will output the compiled JS files with a hash appended to the name
        chunkFileNames: "[name].[hash].js",
      },
    },
    assetsInlineLimit: 0, // This will make sure that all assets, including CSS files, are inlined in the output JS files
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")], // This will process CSS files with Tailwind CSS and Autoprefixer
    },
  },
};
