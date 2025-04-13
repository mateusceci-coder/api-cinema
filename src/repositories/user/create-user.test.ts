import { createUserTest } from "../../tests/fixtures/user";
import { prismaMock } from "../../config/db/singleton";
import { CreateUserParams } from "../../domain/user";

const createNewUser = async (params: CreateUserParams) => {
  return await prismaMock.user.create({
    data: params,
  });
};

describe("Create User Repository", () => {
  it("should create a new user", async () => {
    // Mock implementation of prismaMock.user.create
    prismaMock.user.create.mockResolvedValue({
      id: "1",
      name: createUserTest.name,
      email: createUserTest.email,
      age: createUserTest.age,
      createdAt: new Date(),
    });

    const user = await createNewUser(createUserTest);

    expect(user.id).toBeDefined();
    expect(user.name).toBe(createUserTest.name);
    expect(user.email).toBe(createUserTest.email);
    expect(user.age).toBe(createUserTest.age);
    expect(user.createdAt).toBeDefined();
  });
});
