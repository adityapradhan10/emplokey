export type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  inset?: boolean;
};
