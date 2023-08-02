import { FC, ChangeEvent } from "react";
import { SButton, SButtonActive } from "./styles";

type Properties = {
  sortChange: (event: ChangeEvent<any>) => void;
  sortActive: boolean;
};

export const Button: FC<Properties> = ({ sortChange, sortActive }) => {
  return !sortActive ? (
    <SButton data-testid="btn noActive" onClick={sortChange}>
      <svg
        width="20"
        height="12"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 0.75L6 5.25L10.5 0.75"
          stroke="blue"
          stroke-opacity="0.55"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SButton>
  ) : (
    <SButtonActive data-testid="btn Active" onClick={sortChange}>
      <svg
        width="20"
        height="12"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 0.75L6 5.25L10.5 0.75"
          stroke="green"
          stroke-opacity="0.55"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SButtonActive>
  );
};
