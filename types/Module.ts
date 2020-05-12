export interface Module {
  key: string;
  type: ModuleType;
  owner: string;
  repo: string;
  desc: string;
}

type ModuleType = "github";
