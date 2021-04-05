/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

export default function Header() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: 100%;
        padding: 13px;
      `}
    >
      <p
        css={css`
          font-family: muli, sans-serif;
          font-weight: 700;
          font-style: normal;
          margin: 0;
          color: white;
        `}
      >
        Welcome to
      </p>
      <img
        css={css`
          width: 50%;
        `}
        src="/pokedex-logo.png"
      />
    </div>
  );
}
