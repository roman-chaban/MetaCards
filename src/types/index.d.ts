declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.module.scss'
declare module '*.png'
declare module '*.webp'
declare module '*.jpg'
