// src/types/next.d.ts
import 'next';

declare module 'next' {
  export interface PageParams<T = Record<string, unknown>> {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}