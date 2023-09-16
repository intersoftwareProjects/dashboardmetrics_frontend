import { User } from "../Interfaces/user.interface";

const API_URL = process.env.API_URL;

export const loginUser = async (username: string, password: string) => {
  const user: User = {
    username,
    password
  }
  const res = await fetch(API_URL + "/users/login", {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  return data;
};
