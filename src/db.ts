import { Deta } from "deta";

if (!process.env.DETA_PROJECT_KEY) throw new ReferenceError();

const deta = Deta(process.env.DETA_PROJECT_KEY);

export const db = deta.Base("cherynobyl_db");
