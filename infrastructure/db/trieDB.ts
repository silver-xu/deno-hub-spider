import { Repo } from "../../types/ModuleRepo.ts";
import { listDenoRepos } from "../external/index.ts";
import { config } from "../../config.ts";
import { trie } from "../../deps.ts";

const root = trie.init<Repo>();
const moduleRepos = await listDenoRepos(config.denoDbUrl);
moduleRepos.forEach((moduleRepo) => {
  trie.add(root, moduleRepo.key, moduleRepo);
});

export const getModule = (key: string): Repo | undefined => {
  return trie.get(root, key);
};

export const searchModule = (keyword: string): trie.SearchResult<Repo>[] => {
  return trie.search(root, keyword);
};
