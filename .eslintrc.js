module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    'node_modules',
    'tailwind.config.js',
    'postcss.config.js',
    '.eslintrc.js',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
