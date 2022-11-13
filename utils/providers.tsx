import { IStatus } from "../helpers/types";

const apiStatuses: IStatus = {
  loading: "loading",
  idle: "idle",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const signInUrl = "/api/auth/callback/credentials";

export { apiStatuses, signInUrl };
