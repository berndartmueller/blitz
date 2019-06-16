import { app } from './app';

(async () => {
  const server = app.listen(8080, () => {
    console.log(`App listening on port 8080!`);
  });
})();

export { app };
