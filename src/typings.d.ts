declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  interface SClassNames {
    [className: string]: string
  }
  const classNames: SClassNames;
  export = classNames;
}
