/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import { Children } from 'react';

type ProfileDataListItemProps = {
  title: string;
  items: ReactElement[] | string[];
};

export const ProfileDataListItem = ({ title, items }: ProfileDataListItemProps) => (
  <>
    <dt>
      <strong>{title}</strong>
    </dt>
    {Children.toArray(
      items.map((item, index) => (
        <dd
          sx={{
            mb: items.length - 1 > index ? 0 : 1,
          }}
        >
          {item}
        </dd>
      )),
    )}
  </>
);
