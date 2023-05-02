declare namespace App {
  export interface Mission {
    id: number
    store: string
    name: string
    img: string
    is_sub: boolean
    status?: string
  }
}
