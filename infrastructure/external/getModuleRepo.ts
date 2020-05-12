import { Repo } from "../../types/ModuleRepo.ts";
import { Module } from "../../types/Module.ts";

export const getRepo = async (module: Module): Promise<Repo> => {
  const baseRawContentUrl = getRepoUrl(module, true);
  const readmeUrl = `${baseRawContentUrl}/master/README.md`;

  const response = await fetch(readmeUrl);
  const readme = await response.text();

  return {
    key: module.key,
    url: getRepoUrl(module),
    rawUrl: baseRawContentUrl,
    readme,
  };
};

const getRepoUrl = (module: Module, raw: boolean = false) => {
  switch (module.type) {
    case "github":
      return raw ? getGithubRawContentUrl(module) : getGithubUrl(module);
    default:
      return raw ? getGithubRawContentUrl(module) : getGithubUrl(module);
  }
};

const getGithubUrl = (moduleOnGithub: Module) =>
  `https://github.com/${moduleOnGithub.owner}/${moduleOnGithub.repo}`;

const getGithubRawContentUrl = (moduleOnGithub: Module) =>
  `https://raw.githubusercontent.com/${moduleOnGithub.owner}/${moduleOnGithub.repo}`;
