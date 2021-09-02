function propToMobile<T>(props: any): T {
  const result = Object.keys(props).reduce((acc, item) => {
    const currentProp = props[item];
    if(currentProp && typeof currentProp.xs !== 'undefined') {
      return {
        ...acc,
        [item]: currentProp.xs,
      };
    }

    if(currentProp) {
      return {
        ...acc,
        [item]: currentProp,
      };
    }

    return acc;
  }, {} as T);
  return result;
}

export default propToMobile;
