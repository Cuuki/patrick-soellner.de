/** @jsxImportSource theme-ui */
import { CalendarAlt } from 'emotion-icons/fa-solid';

type DurationTextProps = {
  dateStart: { isoString: string; displayText: string };
  dateEnd: { isoString: string; displayText: string };
};

export const DurationText = ({ dateStart, dateEnd }: DurationTextProps) => {
  return (
    <span
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <CalendarAlt
        size={18}
        sx={{
          mr: 1,
        }}
      />
      <span>
        <time dateTime={dateStart.isoString}>{dateStart.displayText}</time> -{' '}
        <time dateTime={dateEnd.isoString}>{dateEnd.displayText}</time>
      </span>
    </span>
  );
};
