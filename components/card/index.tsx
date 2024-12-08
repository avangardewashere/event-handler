import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const EventCard = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.dateHolder)}>
        <b>17</b>
        <span>Mar</span>
      </div>
      <div className={clsx(style.information)}>
        <div className={clsx(style.title)}>Cinco De Mayo</div>
        <div className={clsx(style.time)}> 12:00 - 14:00 </div>
        <div className={clsx(style.address)}>315 SW WestParc Avenue, St.Portland Riverplace Marina</div>
      </div>
    </div>
  );
});

export default EventCard;