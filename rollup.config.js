import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

const build = () => [
  entry('./src/index.ts', [out('./dist/index.js', { format: 'cjs', minify: true })]),
  entry('./src/development.ts', [out('./dist/development.js', { format: 'cjs', minify: true })]),
];

const entry = (input, output) => ({
  input,
  plugins: [ts()],
  output,
  onwarn: () => {},
});

export const out = (file, { format, minify }) => ({
  file,
  format,
  name: 'babel-plugin-million',
  strict: true,
  plugins: minify ? [terser()] : [],
});

export default build();
