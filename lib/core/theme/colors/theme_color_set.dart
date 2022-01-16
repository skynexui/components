class ThemeColorSet {
  final String x000;
  final String x050;
  final String x100;
  final String x200;
  final String x300;
  final String x400;
  final String x500;
  final String x600;
  final String x700;
  final String x800;
  final String x900;
  final String x999;

  const ThemeColorSet({
    this.x000 = '#ffffff',
    this.x050 = '#ffffff',
    this.x100 = '#ffffff',
    this.x200 = '#ffffff',
    this.x300 = '#ffffff',
    this.x400 = '#ffffff',
    this.x500 = '#ffffff',
    this.x600 = '#ffffff',
    this.x700 = '#ffffff',
    this.x800 = '#ffffff',
    this.x900 = '#ffffff',
    this.x999 = '#ffffff',
  });

  toMap() {
    return {
      "x000": x000,
      "x050": x050,
      "x100": x100,
      "x200": x200,
      "x300": x300,
      "x400": x400,
      "x500": x500,
      "x600": x600,
      "x700": x700,
      "x800": x800,
      "x900": x900,
      "x999": x999,
    };
  }
}
