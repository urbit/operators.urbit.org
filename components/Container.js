// Ensures the root container is always 100vw, min 100vh, and centers all children along the y-axis
export default function Container({ children, className }) {
  return (
    <div className={"flex flex-col min-h-screen w-screen items-center " + className}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: ''
}