export default function (app: any) {
  const controllers = {};

  Object.keys(controllers).map((key: string) => {
    app.Controllers[key] = new controllers[key];
  });
}
