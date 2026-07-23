import { BRAND } from "../data/content";
import { GoAILogo } from "./GoAILogo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-900 px-6 py-10 text-gray-400 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <GoAILogo className="h-8 w-auto" />
          <p className="mt-3 text-sm">{BRAND.tagline}</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
