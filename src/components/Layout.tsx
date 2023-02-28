type Props = {
    children: JSX.Element,
  };

  const Layout = ({ children }: Props) => (
    <div className="flex flex-col pt-10 h-screen w-screen gap-6 max-w-[1250px] mx-auto">
      <h1>title</h1>
      {children}
    </div>
  );

  export default Layout