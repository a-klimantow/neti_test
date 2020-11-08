import React from "react"
import styled from "reshadow/macro"
import { Icon } from "@material-ui/core"

export const Search = ({ value, onChange }) =>
  styled()`
    search {
      padding: 0.25rem 0.5rem;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 0.25rem;
      place-content: center statch;
      border: 1px solid var(--grey);
      border-radius: 0.5rem;

      &:hover,
      &:focus-within {
        border-color: var(--primary);
      }
    }

    input {
      outline: 0;
      border: none;
      font: inherit;
      color: inherit;
    }
  `(
    <search>
      <input value={value} onChange={onChange} />
      <Icon color="inherit">search</Icon>
    </search>
  )
