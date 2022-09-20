import { useClassName, useNamespace } from '@spark-ui/hooks';
import { useCallback } from 'react';
import { useCollapseContext } from './CollapseContext';
import { PanelProps } from './interface';
import './panel.less';

function Panel(props: PanelProps) {
  const { name } = props;
  const ctx = useCollapseContext();
  if (ctx == null) {
    throw new Error('no CollapseContext provied');
  }
  const { value, onChange } = ctx;
  const ns = useNamespace('collapse-panel');
  const clsNames = useClassName([ns.b()]);
  const headerClsNames = useClassName([
    ns.e('header'),
    ns.useIs('active', name === value),
  ]);
  const contentClsNames = useClassName([
    ns.e('content'),
    ns.useIs('active', name === value),
  ]);
  const handleChange = useCallback(() => {
    onChange(name);
  }, [name, onChange]);
  return (
    <div className={clsNames}>
      <div className={headerClsNames} onClick={handleChange}>
        <span>{'>'}</span>header
      </div>
      <main className={contentClsNames}>
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </main>
    </div>
  );
}

export default Panel;
