import { useCallback, useEffect, useState } from 'react';

interface ArgsType {
  view: string | undefined;
  views: Array<string>;
  onViewChange?: Function;
  onChange: Function;
}

export default ({ view, views, onViewChange, onChange }: ArgsType) => {
  const [openView, setOpenView] = useState(view || views[0]);
  useEffect(() => {
    if (view) {
      setOpenView(view);
    }
  }, [view]);
  const previousView = views[views.indexOf(openView) - 1] ?? null;
  const nextView = views[views.indexOf(openView) + 1] ?? null;
  const changeView = useCallback(
    (newView) => {
      setOpenView(newView);
      if (onViewChange) {
        onViewChange(newView);
      }
    },
    [onViewChange]
  );
  const openNext = useCallback(() => {
    if (nextView) {
      changeView(nextView);
    }
  }, [nextView, changeView]);
  const handleChangeAndOpenNext = useCallback(
    (date, viewSelectionState?) => {
      const isCurViewFinish = viewSelectionState === 'finish';
      const globalSelectionState =
        isCurViewFinish && nextView ? 'partial' : viewSelectionState;
      onChange(date, globalSelectionState);
      if (isCurViewFinish) {
        openNext();
      }
    },
    [nextView, openNext, onChange]
  );
  return {
    openView,
    setOpenView: changeView,
    openNext,
    nextView,
    previousView,
    handleChangeAndOpenNext,
  };
};
