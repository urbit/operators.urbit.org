export default function OneUp({ children, className = "" }) {
  return (
    <div className={`flex flex-wrap w-full ${className}`}>
      <div className="w-full lg:w-1/2 pr-0 pb-8 lg:pr-4">
        {children}
      </div>
    </div>
  );
}
