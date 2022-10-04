import { getUser } from "../api";

export const getGithubUser = async(user) => {
  const response = await fetch(`${getUser}${user}`)

  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong')
}