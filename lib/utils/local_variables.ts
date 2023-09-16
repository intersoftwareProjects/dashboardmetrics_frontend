import { verifyJWT } from "./jwt.handler";

/**
 * * Remove stored token
 * It should remove the Token into the SessionStorage or LocalStorage
 *
 * @returns {void}
 */
export function removeToken(): void {
  window.localStorage.removeItem("token");
  window.sessionStorage.removeItem("token");
}

/**
 * * Get the Token if presents.
 *
 * @returns {string | undefined}
 */
export function getToken(): string | undefined {
  if(typeof(window) !== "undefined") {
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    return token ? token : "";
  }
}

/**
 * * Get the Token if it exists.
 *
 * @returns {string | undefined}
 */
export function getName(): string | undefined {
  const token = getToken();
  if(token) {
    const decoded = verifyJWT(token);
    console.log(decoded);
    return decoded ? decoded.username : "";
  }
  return "";
}