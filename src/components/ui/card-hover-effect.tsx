import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 gap-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
        key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-800/50 dark:bg-blue-900/80 block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle icon={item.icon}>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
      <div
          className={cn(
              "rounded-xl h-full w-full pl-1 pb-1 overflow-hidden bg-neutral-900/50 border border-neutral-800 transition-all relative z-20",
              className
          )}
      >
          <div className="relative z-50">
              <div className="p-2">{children}</div>
          </div>
      </div>
  );
};

export const CardTitle = ({
  className,
  children,
  icon,
}: {
  className?: string;
  children: ReactNode;
  icon: JSX.Element;
}) => {
  return (
      <h4
      className={cn(
        "text-zinc-900 dark:text-zinc-100 font-semibold tracking-wide mt-2 flex items-center justify-start text-sm sm:text-base md:text-lg",
        className
      )}
      >
          {children}
          <div className="flex justify-end">
          <span className="ml-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center bg-slate-900 dark:bg-slate-700 text-white">
    {icon}
  </span>
</div>
      </h4>
  );
};

