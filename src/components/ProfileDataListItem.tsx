/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';

type ProfileDataListItemProps = {
  title: string;
  items: ReactElement[] | string[];
};

export const ProfileDataListItem = ({ title, items }: ProfileDataListItemProps) => (
  <>
    <dt>
      <strong>{title}</strong>
    </dt>
    {items.map((item, index) => (
      <dd
        key={`item-${index}`}
        sx={{
          mb: items.length - 1 > index ? 0 : 1,
        }}
      >
        {item}
      </dd>
    ))}
  </>
);
