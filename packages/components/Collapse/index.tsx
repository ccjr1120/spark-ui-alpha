import { useMemo } from 'react';
import { useNamespace, useClassName } from '@spark-ui/hooks';
import { CollapseProps } from './interface';
import Panel from './Panel';
import './index.less';
import CollapseContext from './CollapseContext';

function Collapse(props: CollapseProps) {
  const { children, value, onChange } = props;
  const ns = useNamespace('collapse');
  const clsNames = useClassName([ns.b()]);
  const contextValues = useMemo(
    () => ({
      value,
      onChange,
    }),
    [value, onChange]
  );

  return (
    <CollapseContext.Provider value={contextValues}>
      <div className={clsNames}>
        <div className={ns.m('content')}>{children}</div>
      </div>
    </CollapseContext.Provider>
  );
}

Collapse.Panel = Panel;

export { Panel };
export default Collapse;
