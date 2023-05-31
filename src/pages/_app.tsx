import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans_JP} from 'next/font/google';

const noto_jp = Noto_Sans_JP({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-noto_jp',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${noto_jp.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
