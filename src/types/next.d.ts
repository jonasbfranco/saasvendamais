// src/types/next.d.ts (crie este arquivo)
import 'next';

declare module 'next' {
  interface PageProps<T = any> {
    params: T
    searchParams?: { [key: string]: string | string[] | undefined }
  }
}