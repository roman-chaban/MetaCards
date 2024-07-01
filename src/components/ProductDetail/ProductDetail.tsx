import type { FC } from "react";
import { Product } from "@/interfaces/nft-product";
import Image from "next/image";
import styles from './ProductDetail.module.scss';
import { Button } from "../UI/Button/Button";
import { detailsList } from "@/constants/detailsList";
import Link from "next/link";
import { NavigationLinks } from "@/enums/navigation";

interface ProductDetailsProps {
   product: Product;
}

export const ProductDetail: FC<ProductDetailsProps> = ({product}) => {
   return <div className={styles.productDetail}>
      <div className={styles.productDetail__navBlock}>
               <Link href={NavigationLinks.DISCOVER}>
            <Button type="button" className={styles.previous__button}>
               <Image src='/images/icons/previous.svg' alt="Previous Icon" width={10} height={15} className={styles.previous__icon} />
            </Button>
               </Link>
            <h4 className={styles.nav__title}>Product Detail</h4>
      </div>
      <div className={styles.productDetail__information}>
            <Image src={product.image} alt={product.title}  width={560} height={560} className={styles.productDetail__image} />
            <div className={styles.details}>
               <div className={styles.details__titles}>
               <h4 className={styles.details__title}>{product.title}</h4>
               <p className={styles.details__subTitle}>
               A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. 
               </p>
               </div>
               <div className={styles.list}>
                  <ul className={styles.list__details}>
                     {detailsList.map((detail, index) => (
                        <li key={index + 1} className={styles.list__details_item}>
                           <Image src={detail.icon} alt={detail.title} width={65} height={65} />
                           <div className={styles.titles}>
                           <h5 className={styles.title} >{detail.title}</h5>
                           <p className={styles.subTitle} >{detail.subTitle}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className={styles.current__bidBlock}>
                  <div className={styles.bid__block}>
                     <h6 className={styles.bid__title}>Current Bid</h6>
                     <div className={styles.bid__info}>
                        <Image src='/images/details/ethereum.svg' alt="Ethereum icon" width={25} height={25} />
                        <span className={styles.bid__rating}>{product.rating}</span>
                     </div>
                  </div>
                  <div className={styles.bid__end}>
                     <h6 className={styles.endIn__title}>End in</h6>
                     <time dateTime="2023-06-17T05:08:00Z" className={styles.endIn__time}>Jun 17, 2023 at 05:08</time>
                  </div>
               </div>
                  <Button type="button" className={styles.bid__button} >
                     <Image src='/images/details/wallet.svg' alt="Wallet Icon" width={25} height={25} />
                     Place Bid
                     </Button>
            </div>
      </div>
   </div>
}