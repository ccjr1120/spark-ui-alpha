import { useNamespace } from '@spark-ui/hooks';
import { ScrollNumberItemProps } from './interface';

function NumberItem(props: ScrollNumberItemProps) {
  const { height, active, children } = props;
  const ns = useNamespace('scroll-number-item');
  return (
    <li
      className={ns.b()}
      // css={css`
      //   width: 100%;
      //   text-align: center;
      //   height: ${height}px;
      //   line-height: ${height}px;
      //   color: ${getColor(active ? 'gray-black-3' : 'gray-black-9')};
      //   ${active && 'font-weight: 700;'}
      // `}
    >
      {children}
    </li>
  );
}
export default NumberItem;
