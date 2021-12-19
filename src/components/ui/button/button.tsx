import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import cn from 'classnames';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  readonly children: ReactNode;
  readonly variant: Variant;
  readonly color: Color;
  readonly rounded: Rounded;
  readonly size: Size;
  readonly className: string;
  readonly disabled?: boolean;
}

type Variant = 'elavated' | 'filled' | 'outlined' | 'text';
type Color = 'default' | 'primary' | 'secondary' | 'transparent';
type Rounded = 'sm' | 'md' | 'lg' | 'full';
type Size = 'sm' | 'md' | 'lg';

const mapVariant = (variant: Variant) => {
  switch (variant) {
    case 'elavated': {
      return cn('shadow', 'border border-transparent');
    }
    case 'outlined': {
      return cn('border-slate-600 border');
    }
    case 'filled': {
      return cn('border border-transparent');
    }
    case 'text': {
      return cn('border border-transparent bg-none');
    }
  }
};

const mapColor = (color: Color) => {
  switch (color) {
    case 'default': {
      return cn('bg-gray-100', 'hover:bg-gray-200 active:bg-gray-300');
    }
    case 'primary': {
      return cn('bg-sky-100', 'hover:bg-sky-200 active:bg-sky-300');
    }
    case 'secondary': {
      return cn('bg-pink-100', 'hover:bg-pink-200 active:bg-pink-300');
    }
    case 'transparent': {
      return cn('bg-transparent');
    }
  }
};

const mapRounded = (rounded: Rounded) => {
  switch (rounded) {
    case 'sm': {
      return cn('rounded');
    }
    case 'md': {
      return cn('rounded-lg');
    }
    case 'lg': {
      return cn('rounded-xl');
    }
    case 'full': {
      return cn('rounded-full');
    }
  }
};

const mapSize = (size: Size) => {
  switch (size) {
    case 'sm': {
      return cn('h-8');
    }
    case 'md': {
      return cn('h-10');
    }
    case 'lg': {
      return cn('h-12');
    }
    default: {
      return 'h-10';
    }
  }
};

const Button = ({
  children,
  disabled,
  variant = 'elavated',
  color = 'default',
  rounded = 'md',
  size = 'md',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        mapVariant(variant),
        mapColor(color),
        mapRounded(rounded),
        mapSize(size),
        'px-6',
        'flex items-center justify-center',
        'outline-none',
        'min-w-max',
        'focus:ring-2 focus:ring-offset-2 focus:ring-slate-700',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
