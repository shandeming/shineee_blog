const Navigation = () => {
  return (
    <nav className="py-10 text-xl">
      <ul className="flex justify-between items-center">
        <li className="hover:text-red-500">
          <a href="/">Home</a>
        </li>
        <ul className="flex justify-end gap-x-6">
          <li className="hover:text-red-500">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-red-500">
            <a href="/tag">Tag</a>
          </li>
          <li className="hover:text-red-500">
            <a href="/about">About</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
export default Navigation;
