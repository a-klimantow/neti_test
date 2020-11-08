import React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "reshadow/macro"

import { AppProvider } from "./AppProvider"
import { Login, Projects, ProjectStucture } from "pages"

export const App = () =>
  styled()(
    <AppProvider>
      <app>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Route path="/" exact component={Projects} />
            <Route
              path="/project/:id/project-structure/:root_structure_id"
              component={ProjectStucture}
            />
          </Route>
        </Switch>
      </app>
    </AppProvider>
  )
