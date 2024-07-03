'use client'

import nfrCards from '@/api/nft-products.json'
import { ProductDetail } from '@/components/ProductDetail/ProductDetail'
import { Product } from '@/interfaces/nft-product'
import styles from '@/app/discover/Discover.module.scss'
import { CreatorCards } from '@/components/CreatorCards/CreatorCards'
import { History } from '@/components/History/History'
import { useState } from 'react'
import { Modal } from '@/components/UI/Modal/Modal'

interface ProductDetailsProps {
  params: { id: number }
}

export default function ProductDetails({
  params: { id }
}: ProductDetailsProps) {
  const findProductDetailsCards = nfrCards.find(
    card => String(card.id) === String(id)
  )

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className={styles.productDetail}>
      <ProductDetail
        openModal={openModal}
        product={findProductDetailsCards as unknown as Product}
      />
      <History />
      <CreatorCards />
      <Modal closeModal={closeModal} isOpen={isModalOpen} />
    </section>
  )
}
