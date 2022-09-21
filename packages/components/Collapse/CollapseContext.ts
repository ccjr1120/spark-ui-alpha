import * as React from 'react';

export interface CollapseContextType {
  sourceValue: Array<number | string> | number | string;
  inlineValue: Array<number | string>;
  onChange: (
    clickName: number | string,
    nextVal: Array<number | string> | number | string
  ) => void;
}

const CollapseContext = React.createContext<CollapseContextType | null>(null);

export function useCollapseContext(): CollapseContextType {
  return React.useContext(CollapseContext);
}

export default CollapseContext;
