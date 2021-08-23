const jsxTransform = require('@babel/plugin-transform-react-jsx');
const jsxTransformConstantElements = require('@babel/plugin-transform-react-constant-elements');

// TODO: Adapt ttps://github.com/pulkitnagpal/custom-jsx-plugin/blob/master/custom-jsx-plugin.js

module.exports = () => ({
  plugins: [
    [jsxTransform, { runtime: 'automatic', importSource: 'million' }],
    jsxTransformConstantElements,
  ],
});
