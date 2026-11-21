import { useEffect, useRef } from "react";

export const CategoryTabs = ({
  categories,
  activeCategoryId,
  onSelectCategory
}) => {
  const tabRefs = useRef({});

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeCategoryId];
    if (activeTabElement) {
      activeTabElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [activeCategoryId]);

  return (
    <div className="sticky top-16 z-30 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/40">
      <div className="max-w-3xl mx-auto px-3">
        <nav
          aria-label="Categorías del menú"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2.5"
        >
          {categories.map(category => {
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                ref={element => (tabRefs.current[category.id] = element)}
                onClick={() => onSelectCategory(category.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shrink-0 ${
                  isActive
                    ? "bg-brand-primary text-brand-bg shadow-sm"
                    : "bg-brand-surface/80 text-brand-muted hover:text-brand-text border border-brand-border/30"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};