import { FC } from 'react'
import { ItemType } from '../App';
import { Popular } from './Popular';
import { New } from './New';

export function withHighlight(Component: FC<ItemType>) {
  return function (props: ItemType) {
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } else if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else {
      return (<Component {...props} />);
    }    
  }
}
