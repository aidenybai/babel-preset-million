import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

const build = () => [
  entry('./src/index.ts', [
    out('./dist/index.esm.js', { format: 'esm', minify: true }),
    out('./dist/index.cjs.js', { format: 'cjs', minify: true }),
    out('./dist/index.umd.js', { format: 'umd', minify: true }),
  ]),
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
