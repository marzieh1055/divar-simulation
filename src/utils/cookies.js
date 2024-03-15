export const getCookies = (name) => {
  return document?.cookie
    ?.split(";")
    ?.find((cookie) => cookie?.trim()?.split("=")[0] == name)
    ?.split("=")[1];
};

export const setCookie = (name, value) => {
    document.cookie = `${name}=${value};`;
}