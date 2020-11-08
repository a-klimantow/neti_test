import React from "react"
import styled, { css } from "reshadow/macro"
import { Link as LinkWrap } from "react-router-dom"

import { useFetch } from "hooks"
import { NavBar, Loader, Nota } from "components"

export const Projects = () => {
  const { data, loading } = useFetch("project")
  return (
    <>
      <NavBar title="Проекты" />
      {loading && <Loader />}
      {data?.map(ProjectItem)}
    </>
  )
}

const styles = css`
  project {
    padding: 1rem 0;
    margin: 0 1rem;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr repeat(3, auto);
    align-items: center;
    border-bottom: 1px solid var(--grey);
  }

  project_name {
    line-height: 2rem;
  }

  LinkWrap {
    display: contents;
    &:hover {
      color: var(--primary);
    }
  }
`

const ProjectItem = ({
  id,
  title,
  notes_cnt_danger,
  notes_cnt_success,
  notes_cnt_warning,
  root_structure_id,
}) =>
  styled(styles)(
    <project key={id}>
      <LinkWrap
        to={{
          pathname: `/project/${id}/project-structure/${root_structure_id}`,
          state: { title, id },
        }}
      >
        <project_name>{title}</project_name>
      </LinkWrap>
      <Nota type="danger">{notes_cnt_danger}</Nota>
      <Nota type="warning">{notes_cnt_warning}</Nota>
      <Nota type="success">{notes_cnt_success}</Nota>
    </project>
  )
