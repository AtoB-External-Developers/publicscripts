"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url-search-params.js");

require("formdata-polyfill");

(function () {
  function a() {
    Object.fromEntries();
    Object.entries();
    new URLSearchParams();
  }
})();