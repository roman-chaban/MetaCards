import type { FC } from 'react';
import styles from './LeaderBoard.module.scss';
import { DiscoverNav } from '../DiscoverNav/DiscoverNav';
import { buttonLabels } from '@/constants/navButtonLabels';

export const LeaderBoard: FC = () => {
  return (
    <div className={styles.board__container}>
      <DiscoverNav buttonLabels={buttonLabels} title="Leaderboard NFTs" />
    </div>
  );
};
