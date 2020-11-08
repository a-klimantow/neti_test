import React from "react"
import axios from "axios"

import { useAppContext } from "hooks"

export const useLogin = () => {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")
  const { onLogin, loading } = useLoginFetch()

  const handleChange = (e) => {
    const { name, value } = e.target
    name === "login" && setLogin(value)
    name === "password" && setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    !loading && onLogin({ login, password })
  }

  return {
    login,
    password,
    handleChange,
    handleSubmit,
    disabled: !login || !password,
    btnText: loading ? "Загрузка..." : "Вход в систему",
  }
}

const useLoginFetch = () => {
  const [data, setData] = React.useState(null)
  const { baseURL, authSuccess } = useAppContext()
  React.useEffect(() => {
    if (data)
      (async () => {
        try {
          const res = await axios.post(`${baseURL}/auth`, {
            ...data,
            type: "web",
          })
          setData(null)
          authSuccess(res.data.data)
        } catch (error) {}
      })()
  }, [data, baseURL, authSuccess])

  return { onLogin: setData, loading: !!data }
}
