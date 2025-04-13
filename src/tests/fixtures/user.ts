import { faker } from "@faker-js/faker";

export const userTest = {
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 1, max: 100 }),
  createdAt: faker.date.recent().toISOString(),
};

export const createUserTest = {
  name: userTest.name,
  email: userTest.email,
  age: userTest.age,
};
