const Navigation = () => {
  return (
    <nav className="py-10 text-xl">
      <ul className="flex justify-between items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <ul className="flex justify-end gap-x-6">
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/tag">Tag</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
export default Navigation;
