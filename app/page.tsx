import Image from "next/image";

import sampleImg from '@/assets/nature.jpg'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <main className="">
        <h1 className="text-center text-2xl font-bold mb-6">hostingnextjs.com - Sample App</h1>
        <p className="mb-4">This is the sample Next.js app of <a className="underline" href="https://hostingnextjs.com">hostingnextjs.com</a>.<br />Demonstrating how to host a Next.js app with different providers.</p>
        <figure className="mb-4">
          <Image src={sampleImg} width={736} height={491} alt="sample image" />
          <figcaption className="text-xs">Source: <a href="https://unsplash.com/de/fotos/gruner-berg-uber-gewasser-Bkci_8qcdvQ">Unsplash</a></figcaption>
        </figure>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
