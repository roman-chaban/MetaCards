import styles from '../assets/loading/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loader}>
      <span>&lt;</span>
      <span>LOADING</span>
      <span>/&gt;</span>
    </div>
  );
}
