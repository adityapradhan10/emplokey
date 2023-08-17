import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps } from 'class-variance-authority';
import labelVariants from './variants';

export type Props = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>;

export type RefProp = React.ElementRef<typeof LabelPrimitive.Root>;
