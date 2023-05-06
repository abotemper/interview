import express from 'express';
import jwt from 'jsonwebtoken';


const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  //!req.session?.jwt = !req.session || !req.session.jwt
  if(!req.session?.jwt) {
    return res.send({ currentUser: null});
  }

  try{
    const payload = jwt.verify(
      req.session.jwt, 
      process.env.JWT_KEY!
      );
      res.send({ currentUser: payload });
  }catch(err) {
    res.send({ currentUser: null });

  }

});
//13245193419: 潘

//该用户是否有req.session.jwt 
// 如果没有， 或者jwt无效，那么返回一个null
//如果有，并且jwt有效，那么恢复一个有效载荷
export { router as currentUserRouter };