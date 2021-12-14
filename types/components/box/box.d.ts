import React, { Ref } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
interface BoxProps {
    as?: any;
    children?: any;
    className?: string;
    styleSheet?: StyleSheet;
    ref?: Ref<any>;
}
export declare const Box: React.ForwardRefExoticComponent<Pick<BoxProps, "as" | "styleSheet" | "children" | "className"> & React.RefAttributes<unknown>>;
export {};
