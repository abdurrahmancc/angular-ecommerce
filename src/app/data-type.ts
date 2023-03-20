export interface SignUp {
  name: string
  email: string
  password: string
}
export interface SignIn {
  email: string
  password: string
}

export interface Product {
  name: string
  price: number
  category: string
  color: string
  image: string
  description: string
  id?: string
}
