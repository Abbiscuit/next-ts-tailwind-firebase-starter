import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-4">
        <h1 className="font-semibold text-7xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="font-mono text-lg">
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div className="px-4 py-4 border rounded-md">
          <p className="flex items-center gap-x-1">
            The current theme is:
            {theme === 'dark' ? (
              <MoonIcon width={24} />
            ) : (
              <SunIcon width={24} />
            )}
          </p>
          <div className="flex flex-row items-center gap-x-1">
            <button
              className="px-2 py-1 bg-gray-200 rounded-md dark:bg-gray-700"
              onClick={() => setTheme('light')}
            >
              Light Mode
            </button>
            <button
              className="px-2 py-1 bg-gray-200 rounded-md dark:bg-gray-700"
              onClick={() => setTheme('dark')}
            >
              Dark Mode
            </button>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 mt-8 gap-x-4 gap-y-4">
          <a className="inline-block px-4 py-4 border rounded-md">
            <h2 className="font-mono">Firebase &rarr;</h2>
            <img
              src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png"
              alt="firebase logo"
            />
          </a>

          <a className="inline-block px-4 py-4 border rounded-md">
            <h2 className="font-mono">Tailwind &rarr;</h2>
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
              alt="tailwind logo"
            />
          </a>
        </div>
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;