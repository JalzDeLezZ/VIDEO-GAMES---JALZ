//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

/* 

GET https://api.rawg.io/api/platforms?key=e49a1296131b4687815a0bd84535da42

GET https://api.rawg.io/api/platforms/lists/parents?key=e49a1296131b4687815a0bd84535da42

GET https://api.rawg.io/api/games?key=e49a1296131b4687815a0bd84535da42

GET https://api.rawg.io/api/genres?key=e49a1296131b4687815a0bd84535da42

GET https://api.rawg.io/api/games?search={game}
>>> https://api.rawg.io/api/games?search=Grand%20Theft%20Auto%20V&key=e49a1296131b4687815a0bd84535da42
>>> https://api.rawg.io/api/games?rating_top=5&key=e49a1296131b4687815a0bd84535da42
 
GET https://api.rawg.io/api/games/{id}?key=e49a1296131b4687815a0bd84535da42
>>> https://api.rawg.io/api/games/3498?key=e49a1296131b4687815a0bd84535da42
*/