// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g9fZ2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "edbcbb8c191f151f";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hFfPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basedecoder = require("./basedecoder");
var _basedecoderDefault = parcelHelpers.interopDefault(_basedecoder);
/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */ /*
   Copyright 2011 notmasteryet
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/ // - The JPEG specification can be found in the ITU CCITT Recommendation T.81
//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)
// - The JFIF specification can be found in the JPEG File Interchange Format
//   (www.w3.org/Graphics/JPEG/jfif3.pdf)
// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters
//   in PostScript Level 2, Technical Note #5116
//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)
const dctZigZag = new Int32Array([
    0,
    1,
    8,
    16,
    9,
    2,
    3,
    10,
    17,
    24,
    32,
    25,
    18,
    11,
    4,
    5,
    12,
    19,
    26,
    33,
    40,
    48,
    41,
    34,
    27,
    20,
    13,
    6,
    7,
    14,
    21,
    28,
    35,
    42,
    49,
    56,
    57,
    50,
    43,
    36,
    29,
    22,
    15,
    23,
    30,
    37,
    44,
    51,
    58,
    59,
    52,
    45,
    38,
    31,
    39,
    46,
    53,
    60,
    61,
    54,
    47,
    55,
    62,
    63, 
]);
const dctCos1 = 4017; // cos(pi/16)
const dctSin1 = 799; // sin(pi/16)
const dctCos3 = 3406; // cos(3*pi/16)
const dctSin3 = 2276; // sin(3*pi/16)
const dctCos6 = 1567; // cos(6*pi/16)
const dctSin6 = 3784; // sin(6*pi/16)
const dctSqrt2 = 5793; // sqrt(2)
const dctSqrt1d2 = 2896; // sqrt(2) / 2
function buildHuffmanTable(codeLengths, values) {
    let k = 0;
    const code = [];
    let length = 16;
    while(length > 0 && !codeLengths[length - 1])--length;
    code.push({
        children: [],
        index: 0
    });
    let p = code[0];
    let q;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < codeLengths[i]; j++){
            p = code.pop();
            p.children[p.index] = values[k];
            while(p.index > 0)p = code.pop();
            p.index++;
            code.push(p);
            while(code.length <= i){
                code.push(q = {
                    children: [],
                    index: 0
                });
                p.children[p.index] = q.children;
                p = q;
            }
            k++;
        }
        if (i + 1 < length) {
            // p here points to last code
            code.push(q = {
                children: [],
                index: 0
            });
            p.children[p.index] = q.children;
            p = q;
        }
    }
    return code[0].children;
}
function decodeScan(data, initialOffset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
    const { mcusPerLine , progressive  } = frame;
    const startOffset = initialOffset;
    let offset = initialOffset;
    let bitsData = 0;
    let bitsCount = 0;
    function readBit() {
        if (bitsCount > 0) {
            bitsCount--;
            return bitsData >> bitsCount & 1;
        }
        bitsData = data[offset++];
        if (bitsData === 255) {
            const nextByte = data[offset++];
            if (nextByte) throw new Error(`unexpected marker: ${(bitsData << 8 | nextByte).toString(16)}`);
        // unstuff 0
        }
        bitsCount = 7;
        return bitsData >>> 7;
    }
    function decodeHuffman(tree) {
        let node = tree;
        let bit;
        while((bit = readBit()) !== null){
            node = node[bit];
            if (typeof node === 'number') return node;
            if (typeof node !== 'object') throw new Error('invalid huffman sequence');
        }
        return null;
    }
    function receive(initialLength) {
        let length = initialLength;
        let n = 0;
        while(length > 0){
            const bit = readBit();
            if (bit === null) return undefined;
            n = n << 1 | bit;
            --length;
        }
        return n;
    }
    function receiveAndExtend(length) {
        const n = receive(length);
        if (n >= 1 << length - 1) return n;
        return n + (-1 << length) + 1;
    }
    function decodeBaseline(component, zz) {
        const t = decodeHuffman(component.huffmanTableDC);
        const diff = t === 0 ? 0 : receiveAndExtend(t);
        component.pred += diff;
        zz[0] = component.pred;
        let k = 1;
        while(k < 64){
            const rs = decodeHuffman(component.huffmanTableAC);
            const s = rs & 15;
            const r = rs >> 4;
            if (s === 0) {
                if (r < 15) break;
                k += 16;
            } else {
                k += r;
                const z = dctZigZag[k];
                zz[z] = receiveAndExtend(s);
                k++;
            }
        }
    }
    function decodeDCFirst(component, zz) {
        const t = decodeHuffman(component.huffmanTableDC);
        const diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
        component.pred += diff;
        zz[0] = component.pred;
    }
    function decodeDCSuccessive(component, zz) {
        zz[0] |= readBit() << successive;
    }
    let eobrun = 0;
    function decodeACFirst(component, zz) {
        if (eobrun > 0) {
            eobrun--;
            return;
        }
        let k = spectralStart;
        const e = spectralEnd;
        while(k <= e){
            const rs = decodeHuffman(component.huffmanTableAC);
            const s = rs & 15;
            const r = rs >> 4;
            if (s === 0) {
                if (r < 15) {
                    eobrun = receive(r) + (1 << r) - 1;
                    break;
                }
                k += 16;
            } else {
                k += r;
                const z = dctZigZag[k];
                zz[z] = receiveAndExtend(s) * (1 << successive);
                k++;
            }
        }
    }
    let successiveACState = 0;
    let successiveACNextValue;
    function decodeACSuccessive(component, zz) {
        let k = spectralStart;
        const e = spectralEnd;
        let r = 0;
        while(k <= e){
            const z = dctZigZag[k];
            const direction = zz[z] < 0 ? -1 : 1;
            switch(successiveACState){
                case 0:
                    {
                        const rs = decodeHuffman(component.huffmanTableAC);
                        const s = rs & 15;
                        r = rs >> 4;
                        if (s === 0) {
                            if (r < 15) {
                                eobrun = receive(r) + (1 << r);
                                successiveACState = 4;
                            } else {
                                r = 16;
                                successiveACState = 1;
                            }
                        } else {
                            if (s !== 1) throw new Error('invalid ACn encoding');
                            successiveACNextValue = receiveAndExtend(s);
                            successiveACState = r ? 2 : 3;
                        }
                        continue; // eslint-disable-line no-continue
                    }
                case 1:
                case 2:
                    if (zz[z]) zz[z] += (readBit() << successive) * direction;
                    else {
                        r--;
                        if (r === 0) successiveACState = successiveACState === 2 ? 3 : 0;
                    }
                    break;
                case 3:
                    if (zz[z]) zz[z] += (readBit() << successive) * direction;
                    else {
                        zz[z] = successiveACNextValue << successive;
                        successiveACState = 0;
                    }
                    break;
                case 4:
                    if (zz[z]) zz[z] += (readBit() << successive) * direction;
                    break;
                default:
                    break;
            }
            k++;
        }
        if (successiveACState === 4) {
            eobrun--;
            if (eobrun === 0) successiveACState = 0;
        }
    }
    function decodeMcu(component, decodeFunction, mcu, row, col) {
        const mcuRow = mcu / mcusPerLine | 0;
        const mcuCol = mcu % mcusPerLine;
        const blockRow = mcuRow * component.v + row;
        const blockCol = mcuCol * component.h + col;
        decodeFunction(component, component.blocks[blockRow][blockCol]);
    }
    function decodeBlock(component, decodeFunction, mcu) {
        const blockRow = mcu / component.blocksPerLine | 0;
        const blockCol = mcu % component.blocksPerLine;
        decodeFunction(component, component.blocks[blockRow][blockCol]);
    }
    const componentsLength = components.length;
    let component1;
    let i;
    let j;
    let k1;
    let n1;
    let decodeFn;
    if (progressive) {
        if (spectralStart === 0) decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
        else decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    } else decodeFn = decodeBaseline;
    let mcu1 = 0;
    let marker;
    let mcuExpected;
    if (componentsLength === 1) mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
    else mcuExpected = mcusPerLine * frame.mcusPerColumn;
    const usedResetInterval = resetInterval || mcuExpected;
    while(mcu1 < mcuExpected){
        // reset interval stuff
        for(i = 0; i < componentsLength; i++)components[i].pred = 0;
        eobrun = 0;
        if (componentsLength === 1) {
            component1 = components[0];
            for(n1 = 0; n1 < usedResetInterval; n1++){
                decodeBlock(component1, decodeFn, mcu1);
                mcu1++;
            }
        } else for(n1 = 0; n1 < usedResetInterval; n1++){
            for(i = 0; i < componentsLength; i++){
                component1 = components[i];
                const { h , v  } = component1;
                for(j = 0; j < v; j++)for(k1 = 0; k1 < h; k1++)decodeMcu(component1, decodeFn, mcu1, j, k1);
            }
            mcu1++;
            // If we've reached our expected MCU's, stop decoding
            if (mcu1 === mcuExpected) break;
        }
        // find marker
        bitsCount = 0;
        marker = data[offset] << 8 | data[offset + 1];
        if (marker < 65280) throw new Error('marker was not found');
        if (marker >= 65488 && marker <= 65495) offset += 2;
        else break;
    }
    return offset - startOffset;
}
function buildComponentData(frame, component) {
    const lines = [];
    const { blocksPerLine , blocksPerColumn  } = component;
    const samplesPerLine = blocksPerLine << 3;
    const R = new Int32Array(64);
    const r = new Uint8Array(64);
    // A port of poppler's IDCT method which in turn is taken from:
    //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
    //   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
    //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
    //   988-991.
    function quantizeAndInverse(zz, dataOut, dataIn) {
        const qt = component.quantizationTable;
        let v0;
        let v1;
        let v2;
        let v3;
        let v4;
        let v5;
        let v6;
        let v7;
        let t;
        const p = dataIn;
        let i;
        // dequant
        for(i = 0; i < 64; i++)p[i] = zz[i] * qt[i];
        // inverse DCT on rows
        for(i = 0; i < 8; ++i){
            const row = 8 * i;
            // check for all-zero AC coefficients
            if (p[1 + row] === 0 && p[2 + row] === 0 && p[3 + row] === 0 && p[4 + row] === 0 && p[5 + row] === 0 && p[6 + row] === 0 && p[7 + row] === 0) {
                t = dctSqrt2 * p[0 + row] + 512 >> 10;
                p[0 + row] = t;
                p[1 + row] = t;
                p[2 + row] = t;
                p[3 + row] = t;
                p[4 + row] = t;
                p[5 + row] = t;
                p[6 + row] = t;
                p[7 + row] = t;
                continue; // eslint-disable-line no-continue
            }
            // stage 4
            v0 = dctSqrt2 * p[0 + row] + 128 >> 8;
            v1 = dctSqrt2 * p[4 + row] + 128 >> 8;
            v2 = p[2 + row];
            v3 = p[6 + row];
            v4 = dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128 >> 8;
            v7 = dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128 >> 8;
            v5 = p[3 + row] << 4;
            v6 = p[5 + row] << 4;
            // stage 3
            t = v0 - v1 + 1 >> 1;
            v0 = v0 + v1 + 1 >> 1;
            v1 = t;
            t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
            v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
            v3 = t;
            t = v4 - v6 + 1 >> 1;
            v4 = v4 + v6 + 1 >> 1;
            v6 = t;
            t = v7 + v5 + 1 >> 1;
            v5 = v7 - v5 + 1 >> 1;
            v7 = t;
            // stage 2
            t = v0 - v3 + 1 >> 1;
            v0 = v0 + v3 + 1 >> 1;
            v3 = t;
            t = v1 - v2 + 1 >> 1;
            v1 = v1 + v2 + 1 >> 1;
            v2 = t;
            t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
            v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
            v7 = t;
            t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
            v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
            v6 = t;
            // stage 1
            p[0 + row] = v0 + v7;
            p[7 + row] = v0 - v7;
            p[1 + row] = v1 + v6;
            p[6 + row] = v1 - v6;
            p[2 + row] = v2 + v5;
            p[5 + row] = v2 - v5;
            p[3 + row] = v3 + v4;
            p[4 + row] = v3 - v4;
        }
        // inverse DCT on columns
        for(i = 0; i < 8; ++i){
            const col = i;
            // check for all-zero AC coefficients
            if (p[8 + col] === 0 && p[16 + col] === 0 && p[24 + col] === 0 && p[32 + col] === 0 && p[40 + col] === 0 && p[48 + col] === 0 && p[56 + col] === 0) {
                t = dctSqrt2 * dataIn[i + 0] + 8192 >> 14;
                p[0 + col] = t;
                p[8 + col] = t;
                p[16 + col] = t;
                p[24 + col] = t;
                p[32 + col] = t;
                p[40 + col] = t;
                p[48 + col] = t;
                p[56 + col] = t;
                continue; // eslint-disable-line no-continue
            }
            // stage 4
            v0 = dctSqrt2 * p[0 + col] + 2048 >> 12;
            v1 = dctSqrt2 * p[32 + col] + 2048 >> 12;
            v2 = p[16 + col];
            v3 = p[48 + col];
            v4 = dctSqrt1d2 * (p[8 + col] - p[56 + col]) + 2048 >> 12;
            v7 = dctSqrt1d2 * (p[8 + col] + p[56 + col]) + 2048 >> 12;
            v5 = p[24 + col];
            v6 = p[40 + col];
            // stage 3
            t = v0 - v1 + 1 >> 1;
            v0 = v0 + v1 + 1 >> 1;
            v1 = t;
            t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
            v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
            v3 = t;
            t = v4 - v6 + 1 >> 1;
            v4 = v4 + v6 + 1 >> 1;
            v6 = t;
            t = v7 + v5 + 1 >> 1;
            v5 = v7 - v5 + 1 >> 1;
            v7 = t;
            // stage 2
            t = v0 - v3 + 1 >> 1;
            v0 = v0 + v3 + 1 >> 1;
            v3 = t;
            t = v1 - v2 + 1 >> 1;
            v1 = v1 + v2 + 1 >> 1;
            v2 = t;
            t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
            v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
            v7 = t;
            t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
            v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
            v6 = t;
            // stage 1
            p[0 + col] = v0 + v7;
            p[56 + col] = v0 - v7;
            p[8 + col] = v1 + v6;
            p[48 + col] = v1 - v6;
            p[16 + col] = v2 + v5;
            p[40 + col] = v2 - v5;
            p[24 + col] = v3 + v4;
            p[32 + col] = v3 - v4;
        }
        // convert to 8-bit integers
        for(i = 0; i < 64; ++i){
            const sample = 128 + (p[i] + 8 >> 4);
            if (sample < 0) dataOut[i] = 0;
            else if (sample > 255) dataOut[i] = 255;
            else dataOut[i] = sample;
        }
    }
    for(let blockRow = 0; blockRow < blocksPerColumn; blockRow++){
        const scanLine = blockRow << 3;
        for(let i = 0; i < 8; i++)lines.push(new Uint8Array(samplesPerLine));
        for(let blockCol = 0; blockCol < blocksPerLine; blockCol++){
            quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);
            let offset = 0;
            const sample = blockCol << 3;
            for(let j = 0; j < 8; j++){
                const line = lines[scanLine + j];
                for(let i = 0; i < 8; i++)line[sample + i] = r[offset++];
            }
        }
    }
    return lines;
}
class JpegStreamReader {
    constructor(){
        this.jfif = null;
        this.adobe = null;
        this.quantizationTables = [];
        this.huffmanTablesAC = [];
        this.huffmanTablesDC = [];
        this.resetFrames();
    }
    resetFrames() {
        this.frames = [];
    }
    parse(data) {
        let offset = 0;
        // const { length } = data;
        function readUint16() {
            const value = data[offset] << 8 | data[offset + 1];
            offset += 2;
            return value;
        }
        function readDataBlock() {
            const length = readUint16();
            const array = data.subarray(offset, offset + length - 2);
            offset += array.length;
            return array;
        }
        function prepareComponents(frame) {
            let maxH = 0;
            let maxV = 0;
            let component;
            let componentId;
            for(componentId in frame.components)if (frame.components.hasOwnProperty(componentId)) {
                component = frame.components[componentId];
                if (maxH < component.h) maxH = component.h;
                if (maxV < component.v) maxV = component.v;
            }
            const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
            const mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
            for(componentId in frame.components)if (frame.components.hasOwnProperty(componentId)) {
                component = frame.components[componentId];
                const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
                const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / maxV);
                const blocksPerLineForMcu = mcusPerLine * component.h;
                const blocksPerColumnForMcu = mcusPerColumn * component.v;
                const blocks = [];
                for(let i = 0; i < blocksPerColumnForMcu; i++){
                    const row = [];
                    for(let j = 0; j < blocksPerLineForMcu; j++)row.push(new Int32Array(64));
                    blocks.push(row);
                }
                component.blocksPerLine = blocksPerLine;
                component.blocksPerColumn = blocksPerColumn;
                component.blocks = blocks;
            }
            frame.maxH = maxH;
            frame.maxV = maxV;
            frame.mcusPerLine = mcusPerLine;
            frame.mcusPerColumn = mcusPerColumn;
        }
        let fileMarker = readUint16();
        if (fileMarker !== 65496) throw new Error('SOI not found');
        fileMarker = readUint16();
        while(fileMarker !== 65497){
            switch(fileMarker){
                case 65280:
                    break;
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65534:
                    {
                        const appData = readDataBlock();
                        if (fileMarker === 65504) {
                            if (appData[0] === 74 && appData[1] === 70 && appData[2] === 73 && appData[3] === 70 && appData[4] === 0) this.jfif = {
                                version: {
                                    major: appData[5],
                                    minor: appData[6]
                                },
                                densityUnits: appData[7],
                                xDensity: appData[8] << 8 | appData[9],
                                yDensity: appData[10] << 8 | appData[11],
                                thumbWidth: appData[12],
                                thumbHeight: appData[13],
                                thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                            };
                        }
                        // TODO APP1 - Exif
                        if (fileMarker === 65518) {
                            if (appData[0] === 65 && appData[1] === 100 && appData[2] === 111 && appData[3] === 98 && appData[4] === 101 && appData[5] === 0) this.adobe = {
                                version: appData[6],
                                flags0: appData[7] << 8 | appData[8],
                                flags1: appData[9] << 8 | appData[10],
                                transformCode: appData[11]
                            };
                        }
                        break;
                    }
                case 65499:
                    {
                        const quantizationTablesLength = readUint16();
                        const quantizationTablesEnd = quantizationTablesLength + offset - 2;
                        while(offset < quantizationTablesEnd){
                            const quantizationTableSpec = data[offset++];
                            const tableData = new Int32Array(64);
                            if (quantizationTableSpec >> 4 === 0) for(let j = 0; j < 64; j++){
                                const z = dctZigZag[j];
                                tableData[z] = data[offset++];
                            }
                            else if (quantizationTableSpec >> 4 === 1) for(let j1 = 0; j1 < 64; j1++){
                                const z = dctZigZag[j1];
                                tableData[z] = readUint16();
                            }
                            else throw new Error('DQT: invalid table spec');
                            this.quantizationTables[quantizationTableSpec & 15] = tableData;
                        }
                        break;
                    }
                case 65472:
                case 65473:
                case 65474:
                    {
                        readUint16(); // skip data length
                        const frame = {
                            extended: fileMarker === 65473,
                            progressive: fileMarker === 65474,
                            precision: data[offset++],
                            scanLines: readUint16(),
                            samplesPerLine: readUint16(),
                            components: {
                            },
                            componentsOrder: []
                        };
                        const componentsCount = data[offset++];
                        let componentId;
                        // let maxH = 0;
                        // let maxV = 0;
                        for(let i = 0; i < componentsCount; i++){
                            componentId = data[offset];
                            const h = data[offset + 1] >> 4;
                            const v = data[offset + 1] & 15;
                            const qId = data[offset + 2];
                            frame.componentsOrder.push(componentId);
                            frame.components[componentId] = {
                                h,
                                v,
                                quantizationIdx: qId
                            };
                            offset += 3;
                        }
                        prepareComponents(frame);
                        this.frames.push(frame);
                        break;
                    }
                case 65476:
                    {
                        const huffmanLength = readUint16();
                        for(let i = 2; i < huffmanLength;){
                            const huffmanTableSpec = data[offset++];
                            const codeLengths = new Uint8Array(16);
                            let codeLengthSum = 0;
                            for(let j = 0; j < 16; j++, offset++){
                                codeLengths[j] = data[offset];
                                codeLengthSum += codeLengths[j];
                            }
                            const huffmanValues = new Uint8Array(codeLengthSum);
                            for(let j2 = 0; j2 < codeLengthSum; j2++, offset++)huffmanValues[j2] = data[offset];
                            i += 17 + codeLengthSum;
                            if (huffmanTableSpec >> 4 === 0) this.huffmanTablesDC[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
                            else this.huffmanTablesAC[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
                        }
                        break;
                    }
                case 65501:
                    readUint16(); // skip data length
                    this.resetInterval = readUint16();
                    break;
                case 65498:
                    {
                        readUint16(); // skip length
                        const selectorsCount = data[offset++];
                        const components = [];
                        const frame = this.frames[0];
                        for(let i = 0; i < selectorsCount; i++){
                            const component = frame.components[data[offset++]];
                            const tableSpec = data[offset++];
                            component.huffmanTableDC = this.huffmanTablesDC[tableSpec >> 4];
                            component.huffmanTableAC = this.huffmanTablesAC[tableSpec & 15];
                            components.push(component);
                        }
                        const spectralStart = data[offset++];
                        const spectralEnd = data[offset++];
                        const successiveApproximation = data[offset++];
                        const processed = decodeScan(data, offset, frame, components, this.resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15);
                        offset += processed;
                        break;
                    }
                case 65535:
                    if (data[offset] !== 255) offset--;
                    break;
                default:
                    if (data[offset - 3] === 255 && data[offset - 2] >= 192 && data[offset - 2] <= 254) {
                        // could be incorrect encoding -- last 0xFF byte of the previous
                        // block was eaten by the encoder
                        offset -= 3;
                        break;
                    }
                    throw new Error(`unknown JPEG marker ${fileMarker.toString(16)}`);
            }
            fileMarker = readUint16();
        }
    }
    getResult() {
        const { frames  } = this;
        if (this.frames.length === 0) throw new Error('no frames were decoded');
        else if (this.frames.length > 1) console.warn('more than one frame is not supported');
        // set each frame's components quantization table
        for(let i = 0; i < this.frames.length; i++){
            const cp = this.frames[i].components;
            for (const j of Object.keys(cp)){
                cp[j].quantizationTable = this.quantizationTables[cp[j].quantizationIdx];
                delete cp[j].quantizationIdx;
            }
        }
        const frame = frames[0];
        const { components , componentsOrder  } = frame;
        const outComponents = [];
        const width = frame.samplesPerLine;
        const height = frame.scanLines;
        for(let i1 = 0; i1 < componentsOrder.length; i1++){
            const component = components[componentsOrder[i1]];
            outComponents.push({
                lines: buildComponentData(frame, component),
                scaleX: component.h / frame.maxH,
                scaleY: component.v / frame.maxV
            });
        }
        const out = new Uint8Array(width * height * outComponents.length);
        let oi = 0;
        for(let y = 0; y < height; ++y){
            for(let x = 0; x < width; ++x)for(let i = 0; i < outComponents.length; ++i){
                const component = outComponents[i];
                out[oi] = component.lines[0 | y * component.scaleY][0 | x * component.scaleX];
                ++oi;
            }
        }
        return out;
    }
}
class JpegDecoder extends _basedecoderDefault.default {
    constructor(fileDirectory){
        super();
        this.reader = new JpegStreamReader();
        if (fileDirectory.JPEGTables) this.reader.parse(fileDirectory.JPEGTables);
    }
    decodeBlock(buffer) {
        this.reader.resetFrames();
        this.reader.parse(new Uint8Array(buffer));
        return this.reader.getResult().buffer;
    }
}
exports.default = JpegDecoder;

},{"./basedecoder":"7Dghs","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Dghs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _predictor = require("../predictor");
class BaseDecoder {
    async decode(fileDirectory, buffer) {
        const decoded = await this.decodeBlock(buffer);
        const predictor = fileDirectory.Predictor || 1;
        if (predictor !== 1) {
            const isTiled = !fileDirectory.StripOffsets;
            const tileWidth = isTiled ? fileDirectory.TileWidth : fileDirectory.ImageWidth;
            const tileHeight = isTiled ? fileDirectory.TileLength : fileDirectory.RowsPerStrip || fileDirectory.ImageLength;
            return _predictor.applyPredictor(decoded, predictor, tileWidth, tileHeight, fileDirectory.BitsPerSample, fileDirectory.PlanarConfiguration);
        }
        return decoded;
    }
}
exports.default = BaseDecoder;

},{"../predictor":"e9l0G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e9l0G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyPredictor", ()=>applyPredictor
);
function decodeRowAcc(row, stride) {
    let length = row.length - stride;
    let offset = 0;
    do {
        for(let i = stride; i > 0; i--){
            row[offset + stride] += row[offset];
            offset++;
        }
        length -= stride;
    }while (length > 0)
}
function decodeRowFloatingPoint(row, stride, bytesPerSample) {
    let index = 0;
    let count = row.length;
    const wc = count / bytesPerSample;
    while(count > stride){
        for(let i = stride; i > 0; --i){
            row[index + stride] += row[index];
            ++index;
        }
        count -= stride;
    }
    const copy = row.slice();
    for(let i = 0; i < wc; ++i)for(let b = 0; b < bytesPerSample; ++b)row[bytesPerSample * i + b] = copy[(bytesPerSample - b - 1) * wc + i];
}
function applyPredictor(block, predictor, width, height, bitsPerSample, planarConfiguration) {
    if (!predictor || predictor === 1) return block;
    for(let i = 0; i < bitsPerSample.length; ++i){
        if (bitsPerSample[i] % 8 !== 0) throw new Error('When decoding with predictor, only multiple of 8 bits are supported.');
        if (bitsPerSample[i] !== bitsPerSample[0]) throw new Error('When decoding with predictor, all samples must have the same size.');
    }
    const bytesPerSample = bitsPerSample[0] / 8;
    const stride = planarConfiguration === 2 ? 1 : bitsPerSample.length;
    for(let i1 = 0; i1 < height; ++i1){
        // Last strip will be truncated if height % stripHeight != 0
        if (i1 * stride * width * bytesPerSample >= block.byteLength) break;
        let row;
        if (predictor === 2) {
            switch(bitsPerSample[0]){
                case 8:
                    row = new Uint8Array(block, i1 * stride * width * bytesPerSample, stride * width * bytesPerSample);
                    break;
                case 16:
                    row = new Uint16Array(block, i1 * stride * width * bytesPerSample, stride * width * bytesPerSample / 2);
                    break;
                case 32:
                    row = new Uint32Array(block, i1 * stride * width * bytesPerSample, stride * width * bytesPerSample / 4);
                    break;
                default:
                    throw new Error(`Predictor 2 not allowed with ${bitsPerSample[0]} bits per sample.`);
            }
            decodeRowAcc(row, stride, bytesPerSample);
        } else if (predictor === 3) {
            row = new Uint8Array(block, i1 * stride * width * bytesPerSample, stride * width * bytesPerSample);
            decodeRowFloatingPoint(row, stride, bytesPerSample);
        }
    }
    return block;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["g9fZ2"], null, "parcelRequire5b12")

//# sourceMappingURL=jpeg.191f151f.js.map
