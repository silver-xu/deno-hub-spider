import { Module } from "../../types/Module.ts";

export const getDenoModule = async (denoDbUrl: string): Promise<Module[]> => {
  const response = await fetch(denoDbUrl);
  const modules = await response.json();
  return Object.entries(modules).map(([key, module]: [string, any]) => ({
    key,
    ...module,
  }));
};
