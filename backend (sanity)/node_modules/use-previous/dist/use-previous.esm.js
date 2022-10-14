import { useRef } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

function usePrevious(value) {
  var ref = useRef();
  useIsomorphicLayoutEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

export default usePrevious;
