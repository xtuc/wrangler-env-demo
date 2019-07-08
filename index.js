addEventListener('fetch', event => {
  const txt = `Hi, my name is ${process.env.USER} and I speak ${process.env.LANG}!`;
  event.respondWith(new Response(txt));
})
