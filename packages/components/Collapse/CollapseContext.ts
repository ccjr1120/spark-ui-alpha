import * as React from 'react';

export interface CollapseContextType {
  value: number | string;
  onChange: (curName: number | string) => void;
}

const CollapseContext = React.createContext<CollapseContextType | null>(null);

export function useCollapseContext(): CollapseContextType {
  return React.useContext(CollapseContext);
}

export default CollapseContext;
