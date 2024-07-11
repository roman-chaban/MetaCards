'use client';

import React, { ChangeEvent, FC } from 'react';
import styles from './SellCreate.module.scss';
import { Input } from '../UI/Input/Input';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { TextArea } from '../UI/TextArea/TextArea';
import Image from 'next/image';
import { Select } from '../UI/Select/Select';
import { Button } from '../UI/Button/Button';

interface SellCreateProps {
  inputs: {
    ArtWorkName: string;
    ArtWorkDescription: string;
    Royalty: string;
    Size: string;
    Tags: string;
    Price: string;
    ETC: string;
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      ArtWorkName: string;
      ArtWorkDescription: string;
      Royalty: string;
      Size: string;
      Tags: string;
      Price: string;
      ETC: string;
    }>
  >;
}

export const SellCreate: FC<SellCreateProps> = ({ inputs, setInputs }) => {
  useChangePageTitle('MetaCards | Sell');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const selectOptions = [
    { value: '5%', label: '5%' },
    { value: '10%', label: '10%' },
    { value: '15%', label: '15%' }
  ];

  const priceOptions = [{ value: 'ETH', label: 'ETH' }];

  return (
    <div className={styles.sellCreate}>
      <label htmlFor="ArtWorkName" className={styles.name}>
        Name
        <div className={styles.inputBlock}>
          <Input
            placeholder="ArtWork Name"
            name="ArtWorkName"
            id="ArtWorkName"
            className={styles.artwork__input}
            type="text"
            value={inputs.ArtWorkName}
            setValue={handleInputChange}
          />
          <Image
            src="/images/inputs/edit.svg"
            alt="Edit Icon"
            width={20}
            height={20}
          />
        </div>
      </label>
      <label htmlFor="ArtWorkDescription" className={styles.description}>
        Description
        <div className={styles.AreaBlock}>
          <TextArea
            settings={{
              className: styles.create__textArea,
              name: 'ArtWorkDescription',
              placeholder: 'ArtWork Description',
              value: inputs.ArtWorkDescription,
              id: 'ArtWorkDescription',
              setValue: handleTextAreaChange
            }}
          />
          <Image
            src="/images/inputs/edit.svg"
            alt="Edit Icon"
            width={20}
            height={20}
          />
        </div>
      </label>
      <div className={styles.royaltySizeBlock}>
        <label htmlFor="Royalty" className={styles.royalty}>
          Royalty
          <div className={styles.select__container}>
            <Select
              name="Royalty"
              id="Royalty"
              options={selectOptions}
              selectedValue={inputs.Royalty}
              onChange={handleSelectChange}
              ariaLabel="Select Royalty"
              classNames={{
                select: styles.select,
                option: styles.option
              }}
            />
          </div>
        </label>
        <label htmlFor="Size" className={styles.size}>
          Size
          <Input
            placeholder="Ex - 100 x 100"
            name="Size"
            id="Size"
            className={styles.size__input}
            type="text"
            value={inputs.Size}
            setValue={handleInputChange}
          />
        </label>
      </div>
      <label htmlFor="Tags" className={styles.tags}>
        Tags
        <div className={styles.tagsBlock}>
          <Input
            placeholder="Beautiful Castle, Monkeys ETC"
            name="Tags"
            id="Tags"
            className={styles.tags__input}
            type="text"
            value={inputs.Tags}
            setValue={handleInputChange}
          />
          <Image
            src="/images/inputs/edit.svg"
            alt="Edit Icon"
            width={20}
            height={20}
          />
        </div>
      </label>
      <div className={styles.priceStockBlock}>
        <label htmlFor="Price" className={styles.price}>
          Price
          <div className={styles.selectInput__block}>
            <div className={`${styles.select__priceContainer}`}>
              <Select
                name="Price"
                id="Price"
                options={priceOptions}
                selectedValue={inputs.Royalty}
                onChange={handleSelectChange}
                ariaLabel="ETH"
                classNames={{
                  select: `${styles.select} ${styles.select__decoration}`,
                  option: styles.option
                }}
              />
            </div>
            <Input
              placeholder="0.00007 ETC"
              name="Price"
              className={styles.size__input}
              type="text"
              value={inputs.ETC}
              setValue={handleInputChange}
            />
          </div>
        </label>
        <div className={styles.stockBlock}>
          <label htmlFor="Stock" className={styles.stock}>
            In Stock
            <div className={styles.stock__selectContainer}>
              <Select
                name="Stock"
                id="Stock"
                options={priceOptions}
                selectedValue={inputs.Royalty}
                onChange={handleSelectChange}
                ariaLabel="ETH"
                classNames={{
                  select: `${styles.stock__select}`,
                  option: styles.option
                }}
              />
            </div>
          </label>
        </div>
      </div>
      <Button type="button" className={styles.create__button}>
        Create
      </Button>
    </div>
  );
};
