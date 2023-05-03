import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';


import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
//express看到https代理会有些担心，所以这里添加一个手动设置
//以确保express知道它位于ingress engine x的代理之后，并确保它仍然相信流量是安全的
//即使流量来自于该代理
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    //cookie不需要加密，因为jwt加密性已经很好了
    signed: false,
    //只允许https访问，更加安全
    secure: true
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async(req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async() => {
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY MUST BE DEFINED');
  }
  try{
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('connected to mongodb');

  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log('listening on port 3000!!!!!!!asd!!!');
  });
  
};
start();



