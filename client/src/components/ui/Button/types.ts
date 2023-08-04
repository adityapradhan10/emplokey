import { type VariantProps } from 'class-variance-authority';
import buttonVariants from './variants';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
