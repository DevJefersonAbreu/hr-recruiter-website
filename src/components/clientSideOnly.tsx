"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface ClientSideOnlyProps {
  children: React.ReactNode
}

const ClientSideOnly: React.FC<ClientSideOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default ClientSideOnly

