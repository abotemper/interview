import mongoose from 'mongoose';

import { app } from './app'
import { natsWrapper } from './nats-wrapper';


const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY MUST BE DEFINED');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI MUST BE DEFINED');
  }

  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID MUST BE DEFINED');
  }

  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL MUST BE DEFINED');
  }

  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID MUST BE DEFINED');
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTGRN', () => natsWrapper.client.close());

    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongodb');
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000!!!!!!!asd!!!');
  });
};
start();


