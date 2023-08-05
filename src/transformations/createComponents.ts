import { transformSync as babelTransform } from '@babel/core';

export const createComponent = (code: string, options?: any): string => {
  

  const result = babelTransform(code, {
    plugins: [
    ],
    comments: false,
    minified: true,
  });

  return result?.code ?? "";
};