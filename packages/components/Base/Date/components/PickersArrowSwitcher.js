import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import { css } from '@emotion/react';
import IconBtn from 'components/Display/IconBtn';

function PickersArrowSwitcher(props) {
  const {
    isLeftDisabled,
    isRightDisabled,
    leftBtnHidden,
    rightBtnHidden,
    onLeftClick,
    onRightClick,
    children,
    ...others
  } = props;
  const getColor = useColor();
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        cursor: pointer;
      `}
      {...others}
    >
      <IconBtn
        css={css`
          visibility: ${leftBtnHidden ? 'hidden;' : 'visible'};
          padding: ${8 / FONT_BASE}rem;
          transform: rotateY(-180deg);
          margin-right: 0.4rem;
        `}
        color={getColor('gray-black-6')}
        code="e6a9"
        disabled={isLeftDisabled}
        onClick={onLeftClick}
      />
      {children}
      <IconBtn
        css={css`
          visibility: ${rightBtnHidden ? 'hidden;' : 'visible'};
          padding: ${8 / FONT_BASE}rem;
        `}
        color={getColor('gray-black-6')}
        code="e6a9"
        disabled={isRightDisabled}
        onClick={onRightClick}
      />
    </div>
  );
}

PickersArrowSwitcher.propTypes = {
  isLeftDisabled: PropTypes.bool,
  isRightDisabled: PropTypes.bool,
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  children: PropTypes.node,
  leftBtnHidden: PropTypes.bool,
  rightBtnHidden: PropTypes.bool,
};

export default PickersArrowSwitcher;
