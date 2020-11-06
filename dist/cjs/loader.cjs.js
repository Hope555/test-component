'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0828c69c.js');

/*
 Stencil Client Patch Esm v2.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"sas-button"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
