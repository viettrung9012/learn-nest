export function logger(req: Request, res: Response, next: Function) {
  console.log('Request...');
  next();
}