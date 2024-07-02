import nfrCards from '@/api/nft-products.json';
import { ProductDetail } from '@/components/ProductDetail/ProductDetail';
import { Product } from '@/interfaces/nft-product';
import styles from '@/app/discover/Discover.module.scss';
import { CreatorCards } from '@/components/CreatorCards/CreatorCards';

interface ProductDetailsProps {
   params: {id: number};
 }

 export function generateMetadata({params: {id}}: ProductDetailsProps) {
   return {
      title: `Discover | Product Details ${id}`,
   }
 }

export default function ProductDetails ({params: {id}}: ProductDetailsProps) {
   const findProductDetailsCards = nfrCards.find((card) => String(card.id) === String(id));

   return <section className={styles.productDetail}  >
      <ProductDetail product={findProductDetailsCards as unknown as Product} />
      <CreatorCards />
   </section>
}