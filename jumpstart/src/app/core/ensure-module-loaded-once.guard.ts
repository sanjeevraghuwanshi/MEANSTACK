export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only`
      );
    }
  }
}
