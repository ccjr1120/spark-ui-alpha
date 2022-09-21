import { useClassName, useContainerRect, useNamespace } from '@spark-ui/hooks';
import { useCallback, useMemo, useRef } from 'react';
import { useCollapseContext } from '../CollapseContext';
import { PanelProps } from './interface';
import './index.less';

function Panel(props: PanelProps) {
  const ctx = useCollapseContext();
  if (ctx == null) {
    throw new Error('no CollapseContext provied');
  }
  const { sourceValue, inlineValue, onChange } = ctx;
  const { name, header, children } = props;
  const contentRef = useRef<HTMLDivElement>();
  const { height } = useContainerRect(contentRef);
  const isActive = inlineValue.some((i) => i === name);

  const ns = useNamespace('collapse-panel');
  const clsNames = useClassName([ns.b()]);
  const headerClsNames = useClassName([ns.e('header')]);
  const contentClsNames = useClassName([ns.e('content')]);

  const handleChange = useCallback(() => {
    let nextVal;
    if (Array.isArray(sourceValue)) {
      if (sourceValue.some((i) => i === name)) {
        nextVal = sourceValue.filter((i) => i !== name);
      } else {
        nextVal = [...sourceValue, name];
      }
    } else {
      nextVal = name === sourceValue ? null : name;
    }
    onChange(name, nextVal);
  }, [sourceValue, name, onChange]);

  return (
    <div className={clsNames}>
      <div className={headerClsNames} onClick={handleChange}>
        {header}
      </div>
      <main
        className={contentClsNames}
        style={{ height: `${isActive ? height : 1}px` }}
      >
        <div ref={contentRef}>{children}</div>
      </main>
    </div>
  );
}

export default Panel;
