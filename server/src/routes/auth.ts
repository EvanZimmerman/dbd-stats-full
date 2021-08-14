import { Router, Request, Response } from "express";
var passport = require('passport');
var OpenIDStrategy = require("passport-openid").Strategy;

var SteamStrategy = new OpenIDStrategy({
  providerURL: 'http://steamcommunity.com/openid',
  stateless: true,
  returnURL: 'http://localhost:4000/auth/steam/return',
  realm: 'http://localhost:4000',
}, (identifier: any, done: any) => {
  process.nextTick(() => {
    var user = {
      identifier: identifier,
      steamId: identifier.match(/\d+$/)[0]
    }
    return done(null, user);
  })
});

passport.use(SteamStrategy);

const router = Router();

router.post('/steam', passport.authenticate('openid'));
router.get('/auth/openid/return', passport.authenticate('openid'),
    function(request: Request, response: Response) {
      console.log(request);
      response.send('hello');
});

// router.get("/steam", async( _: Request, res: Response ) => {
//   res.send("/steam endpoint!");
// });

export default router;