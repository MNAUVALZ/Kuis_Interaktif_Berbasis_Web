import React from 'react';

/**
 * 🎨 [Pondasi UI QuisZoors] Badge.jsx
 * Komponen label status / badge serbaguna dan reusable untuk status level, poin, kuis, dll.
 *
 * Props:
 * - variant: 'points' | 'level' | 'success' | 'danger' | 'info' | 'neutral' | 'navy'
 * - size: 'sm' | 'md' | 'lg'
 * - shape: 'pill' (bulat lonjong) | 'rounded' (sudut membulat)
 * - icon: ReactNode / string (ikon atau emoji opsional)
 */
export default function Badge({
  children,
  variant = 'info',
  size = 'md',
  shape = 'pill',
  icon = null,
  className = '',
  ...props
}) {
  // Pilihan gaya varian warna
  const variantStyles = {
    points: 'bg-amber-100 text-amber-800 border-amber-300',
    level: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    success: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    danger: 'bg-rose-100 text-rose-800 border-rose-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    neutral: 'bg-slate-100 text-slate-700 border-slate-300',
    navy: 'bg-slate-800 text-slate-100 border-slate-700',
  };

  // Pilihan ukuran badge
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11px] gap-1 font-medium',
    md: 'px-2.5 py-1 text-xs gap-1.5 font-semibold',
    lg: 'px-3.5 py-1.5 text-sm gap-2 font-bold',
  };

  // Pilihan bentuk sudut
  const shapeStyles = {
    pill: 'rounded-full',
    rounded: 'rounded-md',
  };

  const selectedVariant = variantStyles[variant] || variantStyles.info;
  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const selectedShape = shapeStyles[shape] || shapeStyles.pill;

  return (
    <span
      className={`
        inline-flex items-center justify-center
        border tracking-wide select-none
        ${selectedVariant}
        ${selectedSize}
        ${selectedShape}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="inline-flex items-center text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
