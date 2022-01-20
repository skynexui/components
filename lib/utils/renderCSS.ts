/* eslint-disable @typescript-eslint/no-explicit-any */
function renderCSSValue(cssPropName: any, cssPropValue: any) {
  if (cssPropName.includes('horizontal')) {
    return `
      ${cssPropName.replace('horizontal', 'left')}: ${cssPropValue};
      ${cssPropName.replace('horizontal', 'right')}: ${cssPropValue};
    `;
  }
  if (cssPropName.includes('vertical')) {
    return `
      ${cssPropName.replace('vertical', 'top')}: ${cssPropValue};
      ${cssPropName.replace('vertical', 'bottom')}: ${cssPropValue};
    `;
  }

  if (cssPropName === 'main-axis-alignment') {
    return `justify-content:${cssPropValue};`;
  }
  if (cssPropName === 'cross-axis-alignment') {
    return `align-items:${cssPropValue};`;
  }

  return `${cssPropName}:${cssPropValue};`;
}

export function renderCSS(props: any, currentBreakpoint: any) {
  if (!props) return '';

  return Object.keys(props)
    .map((prop) => {
      const cssPropName = prop
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
      const cssPropValue = props[prop] || '';
      const isCssPropValueAnObject =
        Object.prototype.toString.call(cssPropValue) === '[object Object]';

      if (currentBreakpoint === 'xs' && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      const currentCssPropValue =
        cssPropValue[`Breakpoints.${currentBreakpoint}`] ||
        cssPropValue[currentBreakpoint];

      if (currentCssPropValue) {
        if (
          typeof currentCssPropValue === 'number' &&
          cssPropName !== 'flex' &&
          cssPropName !== 'z-index'
        ) {
          return renderCSSValue(cssPropName, `${currentCssPropValue}px`);
        }
        return renderCSSValue(cssPropName, currentCssPropValue);
      }

      return false;
    })
    .filter(Boolean)
    .join('');
}
