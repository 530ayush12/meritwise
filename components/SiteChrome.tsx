'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/articles', label: 'Articles' },
  { href: '/story', label: 'Story' },
  { href: '/contact', label: 'Contact' },
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand" aria-label="Meritwise home">
            <img src="/icon.svg" alt="Meritwise" className="brand-mark" width={40} height={40} />
            <span>Meritwise</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      {children}
    </>
  );
}

// Backwards-compatible wrapper used by existing pages.
export function PageShell({ children }: { children: React.ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
