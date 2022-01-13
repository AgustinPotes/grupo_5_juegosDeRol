const User = require('../models/User')
function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }
  
 // let emailInCookie = req.cookies.userEmail;
  //let userFromCookie = User.findByField('eMail', emailInCookie)
  //console.log(userFromCookie);

  next();
}

module.exports = userLoggedMiddleware;