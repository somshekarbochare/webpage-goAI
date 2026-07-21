import { BRAND } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-900 px-6 py-10 text-gray-400 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-heading text-lg font-bold text-white">{BRAND.name}</p>
          <p className="mt-1 text-sm">{BRAND.tagline}</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
