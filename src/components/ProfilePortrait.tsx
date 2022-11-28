/** @jsxImportSource theme-ui */
import Image from 'next/image';

export const ProfilePortrait = () => (
  <div
    sx={{
      maxWidth: 280,
      mx: 'auto',
      mb: 3,
      borderRadius: '100%',
      border: '0.625rem solid currentColor',
      overflow: 'hidden',
    }}
  >
    <Image
      src="/images/portrait.jpg"
      alt="Portrait picture of Patrick Söllner"
      priority={true}
      width={260}
      height={260}
    />
  </div>
);
