import React from "react"
import styled from "reshadow/macro"
import { useLocation, Link as LinkWrap } from "react-router-dom"
import { Icon, IconButton, ButtonBase } from "@material-ui/core"

import { useFetch, useSearch } from "hooks"
import { Loader, NavBar, Tabs, Nota, Breadcrumbs, Search } from "components"

const addBtnStyle = {
  color: "#fff",
  backgroundColor: "var(--primary)",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
}

export const ProjectStucture = () => {
  const { state, pathname } = useLocation()
  const { data } = useFetch(pathname)
  const search = useSearch()
  return styled()`
    filter {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
    ButtonBase {
      border: 1px solid;
    }
  `(
    <>
      <NavBar title={state?.title} showGoBack />
      <Tabs />
      {data ? (
        <>
          <Breadcrumbs links={data.breadcrumbs} />
          <filter as="div">
            <ButtonBase style={addBtnStyle}>
              <Icon>add</Icon>
            </ButtonBase>
            <Search {...search} />
          </filter>
          {data.children
            .filter(({ title }) => title.includes(search.value))
            .map(Item)}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

const Item = ({
  id,
  title,
  notes_cnt_danger,
  notes_cnt_warning,
  notes_cnt_success,
  project_id,
}) =>
  styled()`
    item {
      padding: 1rem;
      display: grid;
      grid-gap: 0.5rem;
      grid-auto-flow: column;
      grid-template-columns: 1fr auto;
      align-items: center;
      border-bottom: 1px solid var(--grey);
    }
    name {
      line-height: 2rem;
    }

    LinkWrap {
      display: contents;
      &:hover {
        color: var(--primary);
      }
    }

    IconButton Icon {
      color: var(--danger);
    }
  `(
    <item key={id}>
      <LinkWrap
        to={{
          pathname: `/project/${project_id}/project-structure/${id}`,
          state: { title, id: project_id },
        }}
      >
        <name>{title}</name>
      </LinkWrap>
      <Nota type="danger">{notes_cnt_danger}</Nota>
      <Nota type="warning">{notes_cnt_warning}</Nota>
      <Nota type="success">{notes_cnt_success}</Nota>
      <Icon>keyboard_arrow_right</Icon>
      <IconButton>
        <Icon>delete_outline</Icon>
      </IconButton>
    </item>
  )
