import React, { useState, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  children: ReactNode;
}

export const IFrame = ({
  children,
  ...props
}: IFrameProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};