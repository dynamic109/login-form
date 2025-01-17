export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "ilovecats",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    password: "helloWorld",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alicebrown@example.com",
    password: "mysecretpassword",
  },
  {
    id: "5",
    name: "Mike Davis",
    email: "mikedavis@example.com",
    password: "password1234",
  },
  {
    id: "6",
    name: "Emily Chen",
    email: "emilychen@example.com",
    password: "ilovecoffee",
  },
  {
    id: "7",
    name: "David Lee",
    email: "davidlee@example.com",
    password: "hello123",
  },
];

export const addUser = (user: User) => {
  const existingUser = findUserByEmailPassword(user.email, user.password);

  if (!existingUser) {
    users.push(user);
  }
};
export const findUser = (id: string) => users.find((u) => u.id === id);
export const findUserByEmailPassword = (email: string, password: string) =>
  users.find((u) => u.email === email && u.password === password);
export const deleteUser = (id: string) => {
  const index = users.findIndex((u) => u.id === id);

  if (index !== -1) {
    users.splice(index, 1);
  }
};
