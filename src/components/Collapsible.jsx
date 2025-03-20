import React from 'react'
import { createContext, useContext, useState, useRef, useEffect} from 'react';

import { ForceScrollUpdateForDuration } from './ForceScrollUpdate';

export default function Collapsible({ children, isExpanded, duration = 500 }) {
  const contentRef = useRef(null);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [children]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded ? `${contentRef.current.scrollHeight}px` : '0px';
      ForceScrollUpdateForDuration(duration); // Repeatedly forces useScroll() updates since it does not
                                              //update on its own during layout changes
    }
  }, [isExpanded, contentHeight]);

  return (
    <div
      ref={contentRef}
      style={{
        overflow: 'hidden',
        transition: `max-height ${duration}ms ease`,
        maxHeight: '0px',
        marginTop: '0px',
        marginBottom: '0px'
      }}
    >
      {children}
    </div>
  );
};

