export type Business = {
  id: number;
  name: string;
  phone: string;
  email: string;
  slug: string;
  address: Address;
  owner: Owner;
}

export type Address = {
  street: string,
  city: string,
  state: string,
  zipcode: string
}

export type Owner = {
  name: string;
  phone: string;
  email: string;
  mailingAddress: Address;
}