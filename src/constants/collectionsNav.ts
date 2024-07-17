import styles from '../components/CollectionsTable/CollectionsTable.module.scss';

export interface CollectionNavItem {
  title: string
  id?: string;
}

export const collectionsNav: CollectionNavItem[] = [
  {
    title: 'Volume'
  },
  {
    title: '24h %'
  },
  {
    title: 'Floor Price',
    id: styles.priceNone,
  },
  {
    title: 'Owners',
    id: styles.ownersNone,
  },
  {
    title: 'Items',
    id: styles.itemsNone,
  }
]
