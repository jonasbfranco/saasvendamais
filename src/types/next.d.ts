// src/types/next.d.ts (crie este arquivo se não existir)
import 'next'

declare module 'next' {
  interface PageProps<T = {}> {
    params: T
    searchParams: { [key: string]: string | string[] | undefined }
  }
}