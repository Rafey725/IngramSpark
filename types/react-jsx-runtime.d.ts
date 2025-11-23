/// <reference types="react" />

declare module 'react/jsx-runtime' {
  import * as React from 'react';
  
  export namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
  
  export function jsx(
    type: React.ElementType,
    props: any,
    key?: React.Key
  ): React.ReactElement;
  
  export function jsxs(
    type: React.ElementType,
    props: any,
    key?: React.Key
  ): React.ReactElement;
  
  export const Fragment: React.ComponentType<{ children?: React.ReactNode }>;
}

