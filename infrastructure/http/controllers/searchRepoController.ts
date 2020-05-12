import { searchModule } from "./../../db/index.ts";
import { Context } from "../../../deps.ts";

export const searchRepoController = (c: Context) => {
  const { keyword } = c.params;
  const searchResult = searchModule(keyword);

  return searchResult;
};
