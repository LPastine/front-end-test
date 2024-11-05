const CartIcon = (props: any) => (
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
        d="M17.872 4.435a.528.528 0 0 0-.398-.181H4.102l-.38-2.927A1.577 1.577 0 0 0 2.16 0H.528a.527.527 0 1 0 0 1.055H2.16c.26 0 .479.186.519.426l.436 3.35a.515.515 0 0 0 .005.04l.984 7.5c.026.162.089.31.16.45A1.58 1.58 0 0 0 3.2 14.309c0 .872.71 1.575 1.582 1.575h.625c-.06.165-.097.348-.097.534 0 .872.71 1.582 1.582 1.582.872 0 1.582-.71 1.582-1.582 0-.186-.038-.369-.098-.534h3.394c-.06.165-.097.348-.097.534 0 .872.71 1.582 1.582 1.582.872 0 1.582-.71 1.582-1.582 0-.186-.038-.362-.097-.527h1.679a.527.527 0 1 0 0-1.055H4.782a.528.528 0 0 1-.527-.527c0-.291.236-.528.575-.53l3.204-.291 7.621-.69a1.586 1.586 0 0 0 1.42-1.329l.92-6.615a.528.528 0 0 0-.123-.419ZM5.712 12.64a.517.517 0 0 1-.566-.423L4.52 7.418h1.889l.435 5.119-1.13.102Zm4.379-.394-1.96.175-.03.002-.208.02-.427-5.024h2.625v4.827Zm3.204-.291-2.15.195V7.418h2.584l-.434 4.535Zm2.738-.645a.528.528 0 0 1-.473.439l-1.197.108.425-4.438h1.784l-.54 3.891Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default CartIcon;