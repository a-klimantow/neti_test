import React from "react"
import styled, { css } from "reshadow/macro"

const styles = css`
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-content: center;
  }

  spiner {
    width: 100px;
    height: 100px;
    border: 4px solid;
    border-color: transparent var(--primary);
    border-radius: 50%;
    animation: spin 1500ms linear infinite;
  }
`

export const Loader = () =>
  styled(styles)(
    <loader>
      <spiner />
    </loader>
  )
