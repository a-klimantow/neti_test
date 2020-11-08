import React from "react"
import { AppContext } from "context"
import { useHistory } from "react-router-dom"

const initialState = {
  baseURL: "https://cdsapi.netimob.com/api",
  accessToken: null,
  isAuth: false,
  user: null,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  useCheckAuth(state)

  const authSuccess = (data) =>
    dispatch({ type: "auth_success", payload: { data } })

  return (
    <AppContext.Provider
      value={{
        ...state,
        authSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

function appReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "auth_success":
      const { fullName, avatar, accessToken } = payload.data
      return {
        ...state,
        isAuth: true,
        accessToken,
        user: { avatar, fullName },
      }

    default:
      console.error("app", type)
      return state
  }
}

const useCheckAuth = ({ isAuth }) => {
  const { replace } = useHistory()
  React.useEffect(() => {
    isAuth ? replace("/") : replace("/login")
  }, [isAuth, replace])
}
