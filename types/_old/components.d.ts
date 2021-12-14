import React, { Ref } from 'react';
interface BoxProps {
    as?: any;
    children?: any;
    className?: string;
    styleSheet?: any;
    ref?: Ref<any>;
}
export declare const Box: React.ForwardRefExoticComponent<Pick<BoxProps, "as" | "styleSheet" | "children" | "className"> & React.RefAttributes<unknown>>;
export declare function Icon({ as, styleSheet: initialStyleSheet, ...props }: any): JSX.Element;
export declare const Text: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
export declare function Image({ as, ...props }: any): JSX.Element;
export declare namespace Image {
    var defaultProps: {
        styleSheet: {};
    };
}
export declare function Input({ as, styleSheet, ...props }: any): JSX.Element;
export declare namespace Input {
    var defaultProps: {
        styleSheet: {};
    };
}
export declare function Button({ as, styleSheet, ...props }: any): JSX.Element;
export declare namespace Button {
    var defaultProps: {
        styleSheet: {};
    };
}
export declare function Link({ children, href, styleSheet, as, ...props }: any): JSX.Element;
export {};
