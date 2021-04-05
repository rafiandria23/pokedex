/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { formatStringFromString } from "../helpers/formatter";

export default function CardPokemon(props) {
  return (
    <div
      css={css`
        background-color: #ffce31;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.14);
        border-radius: 10px;
        border: 4px solid #363199;
        width: 100%;
        display: flex;
        margin: 5px;
        padding: 0 5px;
      `}
    >
      <Link href={`/pokemon-details/${props.name}`} shallow>
        <div>
          <Image
            src={props.image}
            loading="lazy"
            width={96}
            height={96}
            alt={props.name}
          />
          <p style={{ fontWeight: 700, fontSize: "20px" }}>
            {formatStringFromString(props.name)}
          </p>
        </div>
      </Link>
      {props.withButton && (
        <button onClick={() => props.onClickButton()}>Release</button>
      )}
    </div>
  );
}
