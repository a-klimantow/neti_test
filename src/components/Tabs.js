import React from "react"
import styled, { css } from "reshadow/macro"
import { NavLink, useLocation } from "react-router-dom"
import { Icon } from "@material-ui/core"

const tabList = [
  { name: "Структура", icon: "device_hub", hash: "" },
  { name: "Документы", icon: "folder_open", hash: "documnets" },
  { name: "Замечания", icon: "error_outline", hash: "info" },
  { name: "Участники", icon: "people_outline", hash: "remarks" },
  { name: "Аналитика", icon: "trending_up", hash: "analytics" },
  { name: "Настройки", icon: "settings_applications", hash: "settings" },
]

export const Tabs = () =>
  styled()`
    tabs {
      position: relative;
      &::before {
        content: "";
        width: 100%;
        border-bottom: 2px solid var(--grey);
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  `(<tabs>{tabList.map(Tab)}</tabs>)

const styles = css`
  NavLink {
    display: inline-flex;
    align-items: center;
    padding: 1rem;
    &:hover {
      color: var(--primary);
    }
  }

  Icon {
    margin-right: 0.5rem;
  }

  .active {
    color: var(--primary);
    position: relative;
    &::before {
      content: "";
      width: 100%;
      border-bottom: 2px solid;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`

const Tab = ({ name, icon, hash: linkHash }) => {
  const { pathname, hash, state } = useLocation()
  return styled(styles)(
    <NavLink
      key={name}
      to={{ pathname, hash: linkHash, state }}
      activeClassName={styles.active}
      isActive={() => hash.slice(1) === linkHash}
      replace
    >
      <Icon>{icon}</Icon>
      {name}
    </NavLink>
  )
}
