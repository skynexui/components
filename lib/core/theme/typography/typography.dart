import 'package:skynexui_components/core/breakpoints/breakpoints.dart';

class ThemeTypographySet {
  final String fontSize;
  final String fontWeight;
  final String letterSpacing;

  ThemeTypographySet({
    this.fontSize = '12px',
    this.fontWeight = '400',
    this.letterSpacing = '1px',
  });
}

// %%[CODER_START]:Theme_typography_file_defaults%%

ThemeTypographySet body5DefaultXS = ThemeTypographySet(
  fontSize: "8px",
fontWeight: "400"
);
ThemeTypographySet body5DefaultMD = ThemeTypographySet(
  
);      
      

ThemeTypographySet body4DefaultXS = ThemeTypographySet(
  fontSize: "12px",
fontWeight: "400"
);
ThemeTypographySet body4DefaultMD = ThemeTypographySet(
  
);      
      

ThemeTypographySet body3DefaultXS = ThemeTypographySet(
  fontSize: "14px",
fontWeight: "400"
);
ThemeTypographySet body3DefaultMD = ThemeTypographySet(
  
);      
      

ThemeTypographySet body2DefaultXS = ThemeTypographySet(
  fontSize: "16px",
fontWeight: "400"
);
ThemeTypographySet body2DefaultMD = ThemeTypographySet(
  
);      
      

ThemeTypographySet body1DefaultXS = ThemeTypographySet(
  fontSize: "18px",
fontWeight: "400"
);
ThemeTypographySet body1DefaultMD = ThemeTypographySet(
  
);      
      

ThemeTypographySet heading5DefaultXS = ThemeTypographySet(
  fontSize: "14px",
letterSpacing: "-0.04px",
fontWeight: "bold"
);
ThemeTypographySet heading5DefaultMD = ThemeTypographySet(
  fontSize: "16px"
);      
      

ThemeTypographySet heading4DefaultXS = ThemeTypographySet(
  fontSize: "16px",
letterSpacing: "-0.04px",
fontWeight: "bold"
);
ThemeTypographySet heading4DefaultMD = ThemeTypographySet(
  fontSize: "20px"
);      
      

ThemeTypographySet heading3DefaultXS = ThemeTypographySet(
  fontSize: "20px",
letterSpacing: "-0.04px",
fontWeight: "bold"
);
ThemeTypographySet heading3DefaultMD = ThemeTypographySet(
  fontSize: "30px"
);      
      

ThemeTypographySet heading2DefaultXS = ThemeTypographySet(
  fontSize: "24px",
letterSpacing: "-0.04px",
fontWeight: "900"
);
ThemeTypographySet heading2DefaultMD = ThemeTypographySet(
  fontSize: "36px"
);      
      

ThemeTypographySet heading1DefaultXS = ThemeTypographySet(
  fontSize: "36px",
letterSpacing: "-0.04px",
fontWeight: "900"
);
ThemeTypographySet heading1DefaultMD = ThemeTypographySet(
  fontSize: "48px"
);      
      

ThemeTypographySet display1DefaultXS = ThemeTypographySet(
  fontSize: "48px",
letterSpacing: "-0.04px",
fontWeight: "900"
);
ThemeTypographySet display1DefaultMD = ThemeTypographySet(
  fontSize: "60px"
);      
       
// %%[CODER_END]:Theme_typography_file_defaults%%

class ThemeTypography {
  // %%[CODER_START]:Theme_typography_file_attributes%%

Map<Breakpoints, ThemeTypographySet> body5 = {
  Breakpoints.xs: body5DefaultXS,
  Breakpoints.md: body5DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> body4 = {
  Breakpoints.xs: body4DefaultXS,
  Breakpoints.md: body4DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> body3 = {
  Breakpoints.xs: body3DefaultXS,
  Breakpoints.md: body3DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> body2 = {
  Breakpoints.xs: body2DefaultXS,
  Breakpoints.md: body2DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> body1 = {
  Breakpoints.xs: body1DefaultXS,
  Breakpoints.md: body1DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> heading5 = {
  Breakpoints.xs: heading5DefaultXS,
  Breakpoints.md: heading5DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> heading4 = {
  Breakpoints.xs: heading4DefaultXS,
  Breakpoints.md: heading4DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> heading3 = {
  Breakpoints.xs: heading3DefaultXS,
  Breakpoints.md: heading3DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> heading2 = {
  Breakpoints.xs: heading2DefaultXS,
  Breakpoints.md: heading2DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> heading1 = {
  Breakpoints.xs: heading1DefaultXS,
  Breakpoints.md: heading1DefaultMD,
};
      

Map<Breakpoints, ThemeTypographySet> display1 = {
  Breakpoints.xs: display1DefaultXS,
  Breakpoints.md: display1DefaultMD,
};
       
// %%[CODER_END]:Theme_typography_file_attributes%%

  toMap() {
    return {
      // %%[CODER_START]:Theme_typography_file_attributes_map%%
"body5": body5,
"body4": body4,
"body3": body3,
"body2": body2,
"body1": body1,
"heading5": heading5,
"heading4": heading4,
"heading3": heading3,
"heading2": heading2,
"heading1": heading1,
"display1": display1, 
// %%[CODER_END]:Theme_typography_file_attributes_map%%
    };
  }
}
