import { ReactNode } from 'react'

export interface Stats {
  firstBlock: {
    title: string
    subTitle: string
  }
  secondBlock: {
    title: string
    subTitle: string
  }
  thirdBlock: {
    title: string
    subTitle: string
  }
}

export interface Bio {
  title: string
  subTitle: string
}

export interface Profile {
  mainImage: string
  profileName: string
  profileTag: string
  followLabel: string
  stats: Stats
  bio: Bio
}

export type TypeProfile = Profile[]
