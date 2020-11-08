import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "reshadow/macro"
import T from "prop-types"

export const Breadcrumbs = ({ links = [] }) => {
  const { state } = useLocation()
  return styled()`
    breadcrumbs {
      margin: 0 1rem;
      border-bottom: 2px solid var(--grey);
      font-size: 0.875rem;
      & > * {
        display: inline-block;
        padding: 1rem 0;
        padding-right: 1rem;
        color: var(--primary);

        &:last-child {
          pointer-events: none;
          color: inherit;
        }
      }
    }
  `(
    <breadcrumbs>
      {links.map(({ id, title, type }) => (
        <Link
          key={id}
          to={{
            pathname: `/project/${state.id}/${type}/${id}`,
            state: { ...state, title },
          }}
        >
          {title}
        </Link>
      ))}
    </breadcrumbs>
  )
}

Breadcrumbs.propTypes = {
  links: T.array.isRequired,
}
