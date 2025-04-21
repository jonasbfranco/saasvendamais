// src/types/next.d.ts
import { Metadata, ResolvingMetadata } from 'next'

declare module 'next' {
  export interface PageProps<T = {}> {
    params: T
    searchParams: { [key: string]: string | string[] | undefined }
  }
}