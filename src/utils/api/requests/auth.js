import instance from "../instanse";

export const userCreateOTP = async (phone) => {
  return await instance.post("/auth/otp", { phone });
};

export const userSignIn = async (formState) => {
  return await instance.post("/users/signin", formState);
};

export const userGetSession = async () => {
  return await instance.get("/users/session");
};
