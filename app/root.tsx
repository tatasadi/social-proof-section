import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import stylesheet from '~/tailwind.css'
import Footer from './components/Footer'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap',
  },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="absolute left-0 top-0 z-0 h-[14.5rem] w-[23.375rem] bg-[url('/images/bg-pattern-top-mobile.svg')] bg-contain bg-no-repeat lg:h-[22.625rem] lg:w-[36.5rem] lg:bg-[url('/images/bg-pattern-top-desktop.svg')]" />
        <div className="absolute bottom-0 right-0 z-0 h-[29rem] w-[46.750rem] bg-[url('/images/bg-pattern-bottom-desktop.svg')] bg-contain bg-no-repeat lg:h-[42.0625rem] lg:w-[67.8125rem]" />
        <Outlet />
        <Footer className="m-4 mt-auto" />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
