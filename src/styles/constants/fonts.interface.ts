export interface IFontsInterface {
  family: {
    base: string;
    emphasized: string;
    secondary: string;
  };
  weight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  size: {
    base: string;
    small: string;
    medium: string;
    big: string;

    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  lineHeight: {
    base: string;
    small: string;
    medium: string;
    big: string;

    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
  };
}
