import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import {
  source,
  main,
  module
} from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const filterNulls = (arr) => arr.filter(x => !!x);
const external = ['react', 'hoist-non-react-statics'];
const globals = {
  react: 'React',
  'hoist-non-react-statics': 'hoistNonReactStatics'
};

export default [
  {
    input: source,
    output: { file: main, format: 'umd', name: 'statefulDecorator' },
    external,
    globals,
    plugins: filterNulls([
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      resolve(),
      commonjs(),
      buble(),
      isProduction ? uglify() : null
    ])
  },
  {
    input: source,
    output: { file: module, format: 'es' },
    external,
    globals,
    plugins: filterNulls([
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      resolve(),
      commonjs(),
      buble({
        target: { chrome: 52 }
      })
    ])
  }
];
