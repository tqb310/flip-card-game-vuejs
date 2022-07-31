const modules = import.meta.glob("./*.png");

const exportedModules = [];

for (const path in modules) {
  const mod = await modules[path]();
  exportedModules.push(mod.default);
}

export default exportedModules;
