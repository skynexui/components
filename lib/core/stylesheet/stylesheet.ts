import { Breakpoints } from '../breakpoints/breakpoints';

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  backgroundColor: ResponsiveProperty<string>;
  padding: ResponsiveProperty<number>;
  margin: ResponsiveProperty<number>;
}