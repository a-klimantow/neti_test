import React from "react"
import styled from "reshadow/macro"
import { TextField, Button } from "@material-ui/core"

import { useLogin } from "./useLogin"

export const Login = () => {
  const {
    password,
    login,
    handleChange,
    handleSubmit,
    disabled,
    btnText,
  } = useLogin()
  return styled()`
    login {
      min-height: 100vh;
      display: grid;
      place-content: center;
    }

    form {
      min-width: 400px;
      display: grid;
      grid-gap: 1rem;
    }
  `(
    <login>
      <form onSubmit={handleSubmit}>
        <TextField
          id="login"
          name="login"
          label="Логин"
          variant="outlined"
          color="primary"
          value={login}
          onChange={handleChange}
        />
        <TextField
          id="password"
          name="password"
          label="Пароль"
          variant="outlined"
          color="primary"
          value={password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={disabled}
        >
          {btnText}
        </Button>
      </form>
    </login>
  )
}
