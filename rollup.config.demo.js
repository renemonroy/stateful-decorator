import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'demo/index.js',
  output: { file: 'demo/bundle.js', format: 'iife', name: 'statefulDecorator' },
  plugins: [
    replace({
      'process.env.NODE_ENV': '"production"'
    }),
    resolve(),
    commonjs(),
    buble({
      exclude: 'node_modules/**'
    })
  ]
};
