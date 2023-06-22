import React from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Profile() {
    const username = useLogin()
  return (
    <div>Hi :{username}</div>
  )
}
