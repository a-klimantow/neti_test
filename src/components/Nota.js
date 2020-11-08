import React from "react"
import styled from "reshadow/macro"
import T from "prop-types"

export const Nota = ({ children, type, ...props }) =>
  styled()`
    nota {
      width: 2.5rem;
      height: 2.5rem;
      border: 2px solid;
      border-radius: 0.25rem;
      border-color: ${`var(--${type})`};
      display: inline-grid;
      place-content: center;
    }
  `(<nota {...props}>{children}</nota>)

Nota.propTypes = {
  children: T.node.isRequired,
  type: T.oneOf(["danger", "success", "warning"]).isRequired,
}
