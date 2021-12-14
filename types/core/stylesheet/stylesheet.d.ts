import { Breakpoints } from '@lib/core/breakpoints/breakpoints';
declare type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;
export interface StyleSheet {
    srOnly?: boolean;
    backgroundColor?: ResponsiveProperty<string>;
    padding?: ResponsiveProperty<number>;
    margin?: ResponsiveProperty<number>;
    focus?: any;
    hover?: any;
}
export {};
