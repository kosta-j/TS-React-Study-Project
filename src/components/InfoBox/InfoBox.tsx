import { type ReactNode } from 'react';
import s from './InfoBox.module.css';

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};
type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  // info, warning
  const { mode, children } = props;
  if (mode === 'hint') {
    return (
      <aside className={`${s.infobox} ${s.infoboxHint}`}>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`${s.infobox} ${s.infoboxWarning} ${s[severity]}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
