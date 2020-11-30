export default function (ctx) {
  if (!Object.keys(ctx.store.state.user).length) {
    ctx.redirect('/?message=noUser')
  }
}