import { getRepo } from "./getModuleRepo.ts";
import { getDenoModule } from "./getDenoModule.ts";
import { Repo } from "../../types/ModuleRepo.ts";

export const listDenoRepos = async (denoDbUrl: string): Promise<Repo[]> => {
  const denoModules = await getDenoModule(denoDbUrl);

  const getModuleRepos = denoModules.map(
    async (module) => await getRepo(module)
  );

  return await Promise.all(getModuleRepos);
};
