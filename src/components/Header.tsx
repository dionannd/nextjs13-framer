import Head from 'next/head';

type Favicon = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicon> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/icons/apple-icon-57x57.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/icons/apple-icon-60x60.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/icons/apple-icon-72x72.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/icons/apple-icon-76x76.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/icons/apple-icon-114x114.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/icons/apple-icon-120x120.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/icons/apple-icon-144x144.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/icons/apple-icon-152x152.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-icon-180x180.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/icons/android-icon-192x192.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/icons/favicon-96x96.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png'
  },
  {
    rel: 'manifest',
    href: '/icons/manifest.json'
  }
];

export default function Header() {
  return (
    <Head>
      {favicons.map((props, index) => (
        <link key={index} {...props} />
      ))}
    </Head>
  );
}