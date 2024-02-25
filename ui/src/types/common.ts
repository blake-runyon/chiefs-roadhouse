export type MenuItem = {
  label: string,
  link: string,
  isActive: boolean
}

export type Column = {
  header: string,
  field: string,
  subfield?: string,
  formatter: Formatter
}

export enum Formatter {
  STRING = 1,
  NUMBER = 2,
  BOOLEAN = 3,
  MONEY = 4
}