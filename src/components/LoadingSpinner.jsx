import React from 'react'

const LoadingSpinner = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent" />
  </div>
)

export default LoadingSpinner
