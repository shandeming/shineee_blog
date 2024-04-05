const Navigation = () => {
  return (
    <nav className="py-10 text-xl">
      <ul className="flex justify-end gap-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
