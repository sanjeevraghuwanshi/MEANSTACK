export class PropertyResolver {
  static resolve(path: string, obj: any): any {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : undefined;
    }, obj || self);
  }
}
