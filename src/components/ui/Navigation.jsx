import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Collection' },
  { href: '/elements', label: 'Architecture' },
  { href: '/lore', label: 'Mythology' },
];

export default function Navigation({ variant = 'desktop' }) {
  const isMobile = variant === 'mobile';
  
  return (
    <nav className={`w-full ${isMobile ? 'block lg:hidden' : 'hidden lg:block'}`}>
      <ul className={`
        flex items-center
        ${isMobile ? 'flex-row justify-start gap-x-4 overflow-x-auto hide-scrollbar' : 'flex-row justify-center gap-x-8'}
      `}>
        {navItems.map((item) => (
          <li key={item.href} className={isMobile ? 'shrink-0' : 'w-auto'}>
            <NavLink
              to={item.href}
              className={({ isActive }) => `
                block px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] 
                transition-all duration-200 font-medium select-none rounded-full
                ${isActive ? 'text-[var(--color-accent-1)] bg-[var(--color-accent-1)]/10' : 'opacity-75'} {/* Active link: Teal Blue text and light Teal Blue bg */}
                ${isMobile ? 'text-center whitespace-nowrap' : ''}
                relative hover:bg-[var(--color-text-primary)]/5
              `}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
