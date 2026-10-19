import React from 'react';

/**
 * 🎨 [Pondasi UI QuisZoors] Button.jsx
 * Komponen tombol serbaguna dan reusable dengan varian tema QuisZoors
 *
 * Props:
 * - variant: 'primary' | 'danger' | 'success' | 'gold' | 'navy' | 'outline' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - fullWidth: boolean (lebar 100%)
 * - loading: boolean (tampilkan spinner)
 * - disabled: boolean
 * - icon: ReactNode (ikon opsional)
 * - iconPosition: 'left' | 'right'
 * - type: 'button' | 'submit' | 'reset'
 * - onClick: function
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon = null,
  iconPosition = 'left',
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  // Pilihan gaya varian warna
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-400',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm focus:ring-rose-400',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm focus:ring-emerald-400',
    gold: 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm focus:ring-amber-400',
    navy: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm focus:ring-slate-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-400 bg-transparent',
    ghost: 'text-slate-700 hover:bg-slate-100 focus:ring-slate-300 bg-transparent',
  };

  // Pilihan ukuran tombol
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-md font-medium gap-1.5',
    md: 'px-4 py-2 text-sm rounded-lg font-semibold gap-2',
    lg: 'px-6 py-2.5 text-base rounded-xl font-bold gap-2.5',
  };

  const selectedVariant = variantStyles[variant] || variantStyles.primary;
  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        inline-flex items-center justify-center
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-1
        active:scale-[0.98]
        ${selectedVariant}
        ${selectedSize}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'opacity-60 cursor-not-allowed active:scale-100 shadow-none' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {/* Indikator Loading Spinner */}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Ikon di Sisi Kiri */}
      {!loading && icon && iconPosition === 'left' && (
        <span className="inline-flex items-center">{icon}</span>
      )}

      <span>{children}</span>

      {/* Ikon di Sisi Kanan */}
      {!loading && icon && iconPosition === 'right' && (
        <span className="inline-flex items-center">{icon}</span>
      )}
    </button>
  );
}
