import React from 'react'

export const New = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  )
}
