const build = require('./');
const {serverPort, host} = require('constants/common');

(async () => {
  const server = await build();

  server.listen({host, port: serverPort}, (err, addr) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server running on ${addr}`);
  });
})();
