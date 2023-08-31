export function Cross ({ width = '32', color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 24 24">
      <path fill={color} d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"/>
    </svg>
  )
}

export function Circle ({ width = '32', color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 24 24">
      <path fill={color} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/>
    </svg>
  )
}
