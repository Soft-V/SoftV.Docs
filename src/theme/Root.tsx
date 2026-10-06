import React from 'react';
import DocAssistant from '@site/src/components/DocAssistant';

export default function Root({children}: {children: React.ReactNode}) {
  return <>{children}<DocAssistant /></>;
}
