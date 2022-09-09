// 仿照element-ui产生BEM的hook所写
export const defaultNamespace = 'spark';

const _bem = (block: string, element: string, modifier: string) => {
  let cls = `${defaultNamespace}-${block}`;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }

  return cls;
};

export const useNamespace = (block: string) => {
  const b = () => _bem(block, '', '');
  const e = (element?: string) => _bem(block, element, '');
  const m = (modifier?: string) => _bem(block, '', modifier);
  const bem = (element?: string, modifier?: string) =>
    _bem(block, element, modifier);
  const is = (stateName: string) => `is-${stateName}`;
  return { b, e, m, bem, is };
};
