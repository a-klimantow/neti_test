import React from "react"
import styled from "reshadow/macro"
import { useHistory } from "react-router-dom"
import { Icon } from "@material-ui/core"

export const NavBar = ({ title, showGoBack }) => {
  const { goBack } = useHistory()
  return styled()`
    nav_bar {
      padding: 1rem;
      min-height: 3.5rem;
      display: grid;
      grid-auto-flow: column;
      place-content: center start;
      place-items: center;
      grid-gap: 0.5rem;
      background-color: var(--primary);
      color: #fff;
      font-weight: 600;
    }

    Icon {
      cursor: pointer;
    }
  `(
    <nav_bar>
      {showGoBack && (
        <Icon color="inherit" onClick={() => goBack()}>
          arrow_back
        </Icon>
      )}
      <title as="span">{title}</title>
    </nav_bar>
  )
}
