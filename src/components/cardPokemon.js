/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { formatIdNumber, formatStringFromString } from "../helpers/formatter";
import { useAmp } from "next/amp";

export default function CardPokemon(props) {
  const isAmp = useAmp();
  return (
    <div
      css={css`
        background-color: #313a61;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
          rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border-radius: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 20px;
        padding: 5px;
      `}
    >
      <div
        css={css`
          display: flex;
          width: 100%;
          cursor: pointer;
          align-items: flex-end;
        `}
      >
        <Link href={`/pokemon-details/${props.name}`} shallow>
          <div
            css={css`
              display: flex;
              width: 100%;
              cursor: pointer;
              align-items: center;
            `}
          >
            {isAmp ? (
              <amp-img
                src={props.image}
                width="96"
                height="96"
                layout="responsive"
                alt={props.name}
              ></amp-img>
            ) : (
              // <Image
              //   src={props.image}
              //   loading="lazy"
              //   width={96}
              //   height={96}
              //   alt={props.name}
              // />
              <img src={props.image} loading="lazy" alt={props.name} />
            )}
            <div
              css={css`
                color: #e9ebef;
                margin: 0 0 0 10px;
                width: 100%;
              `}
            >
              <p
                css={css`
                  font-weight: 700;
                  font-size: 25px;
                  letter-spacing: 1px;
                  margin: 0;
                `}
              >
                {formatStringFromString(props.name)}
              </p>
              {props.nickname && (
                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  {formatStringFromString(props.nickname)}
                </p>
              )}
              {props.totalOwned >= 0 && (
                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  Total owned: {props.totalOwned}
                </p>
              )}
              <p
                css={css`
                  margin: 0;
                  font-size: 30px;
                  color: #e9ebef;
                  opacity: 0.3;
                  font-weight: 700;
                  text-align: right;
                `}
              >
                {formatIdNumber(props.id)}
              </p>
            </div>
          </div>
        </Link>
        <div
          css={css`
            margin-left: 5px;
          `}
        >
          {props.withButton && (
            <div
              css={css`
                background-color: #f7ba16;
                padding: 7px 20px;
                border-radius: 20px;
                box-shadow: 0 1px 8px rgba(0, 0, 0, 0.14);
              `}
              onClick={() => props.onClickButton()}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "muli, sans-serif",
                  fontWeight: 700,
                }}
              >
                Release
              </p>
            </div>
            // <button onClick={() => props.onClickButton()}>Release</button>
          )}
        </div>
      </div>
    </div>
  );
}
