import React from 'react'
import classNames from 'classnames'

const Container = ( {children, className}: {children:React.ReactNode, className?: string }) => {
  return (
        <div className={classNames("max-w-[160rem] mx-auto", className)}>{children}</div>
  ) 
}

export default Container