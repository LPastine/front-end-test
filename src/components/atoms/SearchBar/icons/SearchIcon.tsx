const SearchIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M12.021 2.06C9.275-.686 4.806-.686 2.06 2.06c-2.745 2.746-2.745 7.215 0 9.961 2.445 2.445 6.254 2.707 8.998.798.058.273.19.534.402.746l4 4a1.487 1.487 0 1 0 2.104-2.105l-4-4a1.488 1.488 0 0 0-.745-.401c1.91-2.745 1.648-6.553-.798-9Zm-1.263 8.699a5.264 5.264 0 0 1-7.435 0 5.266 5.266 0 0 1 0-7.436 5.265 5.265 0 0 1 7.435 0 5.264 5.264 0 0 1 0 7.436Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SearchIcon;
