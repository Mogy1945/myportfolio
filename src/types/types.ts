export type Product = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  date: string
  explanation: string
  skill: string
  link: string
  sumbnail: string
}

export interface Linkbox {
  href: string
  srcUrl: string
  name: string
  detail: string
}

export interface ProductData {
  linkUrl: string
  srcUrl: string
  name: string
  date: string
  detail: string
  skill: string
}

export interface WorkData {
  head: string
  detail: string
}

export interface SkillData {
  head: string
  srcurl: string
  star: string
}
