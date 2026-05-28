export class Employee {
  firstName: string
  lastName: string
  username: string
  email: string
  dob: string
  eyeColour: string
  address1: string
  address2: string
  address3: string
  cityTown: string
  county: string
  postcode: string
  phoneNo: string
  startDate: string
  role: string
  salary: number

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    dob: string,
    eyeColour: string,
    address1: string,
    address2: string,
    address3: string,
    cityTown: string,
    county: string,
    postcode: string,
    phoneNo: string,
    startDate: string,
    role: string,
    salary: number,
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.email = email
    this.dob = dob
    this.eyeColour = eyeColour
    this.address1 = address1
    this.address2 = address2
    this.address3 = address3
    this.cityTown = cityTown
    this.county = county
    this.postcode = postcode
    this.phoneNo = phoneNo
    this.startDate = startDate
    this.role = role
    this.salary = salary
  }
}
