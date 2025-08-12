import type { StackVariants } from '@/shared/constants';
import type { IconNames } from '@/shared/icons';
import type { MdxHeadline } from '@/shared/lib/mdx';

export interface ArticleResponse {
  content: string
  contentCategory: string
  headlines: MdxHeadline[]
  metadata: ArticleMetadata
  metadataCategory: CategoryMetadata
}

export interface ArticleMetadata {
  createdAt?: string
  description: string
  icon?: IconNames
  note?: string
  tags?: StackVariants[]
  title: string
  updatedAt?: string
}

export interface CategoryMetadata {
  description: string
  link: string
  title: string
}

export interface ArticleData extends ArticleMetadata {
  category: ArticlesCategoryEnum
  link: string
  slug: string
}

export interface ArticlesListResponse {
  articles: ArticleData[]
  link: string
  slug: ArticlesCategoryEnum
  title: string
}

export enum ArticlesCategoryEnum {
  FRONTEND = 'frontend'
}
