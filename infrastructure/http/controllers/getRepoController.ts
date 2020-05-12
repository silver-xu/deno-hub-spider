import { Context, NotFoundException } from "../../../deps.ts";
import { getModule } from "../../db/index.ts";

export const getRepoController = (c: Context) => {
  const { key } = c.params;
  const matchModule = getModule(key);

  if (matchModule) {
    return matchModule;
  } else {
    throw new NotFoundException();
  }
};
