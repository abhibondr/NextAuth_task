/** @format */

export const useAuth = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const PUBLIC_IMAGES_PATH = process.env.PUBLIC_URL;
