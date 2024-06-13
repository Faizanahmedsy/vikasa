export const SimpleCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className="border p-3 rounded-lg">{children}</div>;
};
