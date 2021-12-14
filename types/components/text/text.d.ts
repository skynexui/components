import React from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
interface TextProps {
    styleSheet: StyleSheet;
    children: React.ReactNode;
}
export declare function Text({ children, styleSheet }: TextProps): JSX.Element;
export declare namespace Text {
    var defaultProps: {
        styleSheet: {};
    };
}
export {};
