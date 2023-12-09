export interface IUserInterface {
  id?: number
  username: string
  email: string
  isActive?: boolean
  position: string
  isChecked?:boolean
  password?: string
  personalInfo: PersonalInfo
}

export interface PersonalInfo {
  first_name: string
  last_name: string
  gender: boolean
  age: number
}


export default IUserInterface