import { PropsWithChildren } from 'react';
import styles from './content.module.css';

export type SizeType = 'small' | 'medium' | 'large';

interface ContentProps {
  size: SizeType | number;
}

export default function Content({ size, children }: PropsWithChildren<ContentProps>) {
  return (
    <div style={{ width: `${typeof size === 'number' && size}px` }} className={`content ${typeof size === 'string' && styles[size]}`}>
      {children}
    </div>
  );
}
