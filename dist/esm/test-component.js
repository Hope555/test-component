import { p as promiseResolve, b as bootstrapLazy } from './index-26e3030f.js';

/*
 Stencil Client Patch Browser v2.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"sas-button"]]]], options);
});
