import { Business } from "../types/business";

export const mockBusiness: Business = {
  id: 1,
  name: 'Chiefs Roadhouse',
  phone: '304-752-0505',
  email: 'contact@chiefs.com',
  slug: 'chiefs',
  address: {
    street: '123 main st',
    city: 'Logan',
    state: 'WV',
    zipcode: '25770'
  },
  owner: {
    name: 'Julie',
    phone: '333-333-3333',
    email: 'juliewhite@gmail.com',
    mailingAddress: {
      street: 'PO Box 144',
      city: 'Lenore',
      state: 'WV',
      zipcode: '25676'
    }
  }
}