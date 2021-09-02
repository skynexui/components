export default function withStyledInternalProps<T>(props: any): T   {
  const result = Object.keys(props).reduce((acc, item) => {
    const currentProp = props[item];
    if(item === 'style' || item === 'children') {
      return {
        ...acc,
        [item]: currentProp,
      };
    }
    return {
      ...acc,
      [item.startsWith('$') ? item : `$${item}`]: currentProp,
    };
  }, {} as T);
  return result;
}
