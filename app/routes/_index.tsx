import type { MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { addUser, findUserByEmailPassword, User } from "users";
import { v4 as uuidv4 } from "uuid";

export const meta: MetaFunction = () => {
  return [
    { title: "Dynamic Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type ActionData = {
  error?: string;
  user?: User;
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return Response.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  const existingUser = findUserByEmailPassword(email, password);

  const user = existingUser || newUser;

  if (!existingUser) {
    addUser(user);
  }

  return Response.json({ user }, { status: 200 });
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      location.pathname = `/profile/${user.id}`;
    }

    if (actionData?.user) {
      localStorage.setItem("loggedUser", JSON.stringify(actionData.user));
      navigate(`/profile/${actionData.user.id}`);
    }
  }, [actionData, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-[750px] mx-auto bg-white space-y-4 px-4 py-8 rounded-lg shadow-lg">
        <h1 className="font-semibold text-2xl text-black tracking-widest text-center">
          Login
        </h1>
        <Form method="post" className="space-y-4 p-4">
          <div>
            <label
              className="font-semibold text-sm text-black tracking-widest"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="bg-white border py-1 px-3 w-full text-black"
              type="name"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label
              className="font-semibold text-sm text-black tracking-widest"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="bg-white border py-1 px-3 w-full text-black"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label
              className="font-semibold text-sm text-black tracking-widest"
              htmlFor="email"
            >
              Password:
            </label>
            <input
              className="bg-white border py-1 px-3 w-full text-black"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button
            className="bg-black border py-2 px-3 w-full text-white font-semibold text-md tracking-widest"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
