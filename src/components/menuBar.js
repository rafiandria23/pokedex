/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Link from "next/link";

export default function MenuBar() {
  return (
    <div
      css={css`
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: #353d64;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.14);
        width: 100%;
        border-radius: 20px 20px 0 0;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
        z-index: 10;
      `}
    >
      <Link href="/">
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <img
            css={css`
              width: 50px;
            `}
            src="/pikachu.svg"
            alt="Pikachu"
          />
          <p
            css={css`
              font-weight: 700;
              font-style: normal;
              color: white;
              text-align: center;
              margin: 0;
              margin-top: 7px;
              font-size: 11px;
            `}
          >
            Pokemon List
          </p>
        </div>
      </Link>
      <Link href="/mypokemon">
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <img
            css={css`
              width: 50px;
            `}
            src="/pokeballs.svg"
            alt="Poke Ball"
          />
          <p
            css={css`
              font-weight: 700;
              font-style: normal;
              color: white;
              text-align: center;
              margin: 0;
              margin-top: 7px;
              font-size: 11px;
            `}
          >
            My Pokemon
          </p>
        </div>
      </Link>
    </div>
  );
}
