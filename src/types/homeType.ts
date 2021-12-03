import { ReactComponentElement } from 'react';

interface MenuItemType {
  title: string,
  key: string,
  children?: MenuItemType[],
  component?: ReactComponentElement<any>,
}

export type {
  MenuItemType,
};
