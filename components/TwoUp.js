export default function TwoUp({ children, className = "" }) {
  return (
    <div className={`flex flex-wrap w-full ${className}`}>
      <div className="w-full lg:w-1/2 pr-0 pb-8 lg:pr-4">
        {children[0] || null}
      </div>
      <div className="w-full lg:w-1/2 pl-0 pb-8 lg:pl-4">
        {children[1] || null}
      </div>
    </div>
  );
}
