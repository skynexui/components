interface ProviderProps {
  theme: any;
  children: any;
}
export function Provider({ children }: ProviderProps) {
  return children;
}
