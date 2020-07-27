import home from './svg/home.svg';

export enum Icons {
  Home
}

export const icons = (name: Icons) => {
  switch (name) {
    case Icons.Home:
      return home;
    default:
      return '';
  }
};
