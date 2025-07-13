# Portfolio Website

This repository contains the code for my personal portfolio website:  
🌐 **https://viraj-dhane.github.io/**

The website is built using HTML, CSS, and Bootstrap.

It was a great experience customizing and tailoring the template to reflect my own style and story. In the process, I enhanced my understanding of responsive web design and front-end fundamentals.

The website highlights:
- My background in Data Analytics and Business Intelligence
- Skills in tools like SQL, Python, Tableau, Power BI, and cloud platforms like Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)
- Data Analytics and Engineering projects hosted on GitHub

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## To build the project

Install dependency
```js
npm install
```


To build the app
```js
npm run dev
```

This will give you a local URL like localhost:5173, launch that in your browser.

## To contribute

To clone the project
```js
git clone https://github.com/viraj-dhane/viraj-dhane.github.io.git
```

Open cloned project in VS Code, make respective changes and stage them.


To commit the changes, 

```js
git commit -a -m "Commit message"
```

To push the changes, 

```js
git push
```


