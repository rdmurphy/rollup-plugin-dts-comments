import dts from 'rollup-plugin-dts';

export default {
  input: './src/index.d.ts',
  plugins: [dts()],
  output: {
    file: 'types/index.d.ts',
    format: 'esm'
  }
};
  
