import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';
import EventCard from '../card';

const HomePage  = memo(() => {
  return (
    <div className={clsx(style.container)}>
       <EventCard />
    </div>
  );
});

export default HomePage ;