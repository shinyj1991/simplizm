export default function(context) {
  context.app.router.beforeEach(function(to, from, next) {
    console.log(to, from, context);
    next();
  });
}