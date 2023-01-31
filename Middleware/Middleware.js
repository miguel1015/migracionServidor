const ValidacionPost = (req, res, next) => {
    const { body, method } = req;
    if (method == "POST") {
      if (Object.keys(body).length === 0)
        return res.status(400).json({
          msg: " invalid data",
        });
      next();
    }
    next();
  };
  
  const validacionPut = (req, res, next) => {
      const {body, method} = req;
      if (method == "PUT") {
        if (Object.keys(body).length === 0)
        return res.status(400).json({
          msg: "The body of the message is empty"
        })
      }
          
  };
  
  const requestValid = () => {
    const { method } = req;
    const arrMethod = ["POST", "GET", "PUT", "DELETE"];
    const valid = arrMethod.some((http) => http === method);
    if (!valid)
      return res.status(400).json({
        msg: "Metod http invalid",
      });
  
    next();
  };
  
  const validUrl = (req, res, next) => {
    let url = req.originalUrl;
    const arrayUrl = url.split("/");
    const valid = arrayUrl.some((url) => url == "app");
    console.log(valid);
    const urlValidated = ["app", "/"];
    const validate = urlValidated.some((value) => value === url);
    console.log(validate);
    if (!valid) {
      return res.status(401).json({
        msg: "you don't have authorization",
      });
    }
    if (arrayUrl.length === 2) {
      if (arrayUrl[2] === "")
        return res.status(401).json({
          msg: "you don't have authorization",
        });
      next();
    }
    next();
  };
  
  module.exports = { 
    ValidacionPost, 
    validacionPut,
    requestValid,
    validUrl
  };