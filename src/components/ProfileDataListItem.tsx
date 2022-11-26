/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from 'theme-ui';
import React from 'react';

const ProfileDataListItem: React.FC<{
  title: string;
  items: (JSX.Element | string)[];
}> = ({ title, items }) => (
  <>
    <dt>
      <strong>{title}</strong>
    </dt>
    {items.map((item, index) => (
      <dd key={`item-${index}`}>{item}</dd>
    ))}
  </>
);

export default ProfileDataListItem;
