export interface Vacancy {
  id: string;
  title: string;
  shortDescription: string;
  salary: string;
  department: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  imageUrl: string;
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  story: string;
  imageUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  vacancy?: string;
  resume?: File;
}