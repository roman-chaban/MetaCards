'use client';

import { useState, useRef, type FC, ChangeEvent } from 'react';
import styles from './Upload.module.scss';
import { Button } from '../UI/Button/Button';
import Image from 'next/image';

export const UploadImage: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);

    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    } else {
      setPreview(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.upload}>
      <div className={styles.upload__container}>
        <label className={styles.upload__label} htmlFor="file-upload">
          {preview ? (
            <Image
              width={350}
              height={350}
              src={preview}
              alt="Preview"
              className={styles.upload__preview}
            />
          ) : (
            <>
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.78491 11.1497C6.78491 6.43315 10.6084 2.60962 15.325 2.60962H33.1378C35.4028 2.60962 37.575 3.50938 39.1765 5.11095L42.714 8.64837C44.3155 10.2499 45.2153 12.4222 45.2153 14.6871V41.04C45.2153 45.7566 41.3918 49.5801 36.6752 49.5801H15.325C10.6084 49.5801 6.78491 45.7566 6.78491 41.04V11.1497ZM40.9452 17.5548V41.04C40.9452 43.3983 39.0335 45.31 36.6752 45.31H15.325C12.9667 45.31 11.055 43.3983 11.055 41.04V11.1497C11.055 8.79142 12.9667 6.87966 15.325 6.87966H30.2701V11.1497C30.2701 14.6871 33.1378 17.5548 36.6752 17.5548H40.9452ZM40.7084 13.2847C40.4987 12.6818 40.1545 12.1277 39.6946 11.6677L36.1572 8.13033C35.6972 7.67037 35.1431 7.32618 34.5402 7.11652V11.1497C34.5402 12.3288 35.4961 13.2847 36.6752 13.2847H40.7084Z"
                  fill="#141416"
                />
                <path
                  d="M25.183 19.8517C24.9312 19.9559 24.6953 20.1103 24.4906 20.315L18.0855 26.7201C17.2518 27.5539 17.2518 28.9057 18.0855 29.7395C18.9193 30.5732 20.2711 30.5732 21.1049 29.7395L23.8653 26.9791V36.7699C23.8653 37.949 24.8212 38.9049 26.0003 38.9049C27.1794 38.9049 28.1353 37.949 28.1353 36.7699V26.9791L30.8957 29.7395C31.7294 30.5732 33.0813 30.5732 33.915 29.7395C34.7488 28.9057 34.7488 27.5539 33.915 26.7201L27.51 20.315C26.8809 19.686 25.9569 19.5315 25.183 19.8517Z"
                  fill="#141416"
                />
              </svg>
              <h4 className={styles.upload__title}>
                PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
              </h4>
            </>
          )}
          <input
            ref={fileInputRef}
            id="file-upload"
            type="file"
            accept="image/png, image/gif, image/webp, video/mp4, audio/mp3"
            className={styles.upload__input}
            onChange={handleFileChange}
          />
          {file && <p className={styles.upload__fileName}>{file.name}</p>}
        </label>
      </div>
      <Button
        type="button"
        className={styles.upload__button}
        onClick={handleUploadClick}
      >
        Upload
      </Button>
    </div>
  );
};
