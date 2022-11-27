/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';

type ProfileDataListProps = {
  children: ReactElement[];
};

export const ProfileDataList = ({ children }: ProfileDataListProps) => <dl>{children}</dl>;
