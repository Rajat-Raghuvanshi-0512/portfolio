'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var useIsomorphicLayoutEffect = _interopDefault(require('use-isomorphic-layout-effect'));

function usePrevious(value) {
  var ref = react.useRef();
  useIsomorphicLayoutEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

exports.default = usePrevious;
