import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();
//第二个参数是该listner的 id， nats不允许一个id重复监听，
//比如说你不能勇同一个id， 开两个terminal 去监听
//这里用randomBytes 可以使得每个terminal产生一个独一无二的id

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');

  const subscription = stan.subscribe('ticket:created');

  subscription.on('message', (msg: Message) => {
    const data = msg.getData();
    if (typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }

    console.log('Message received');
  });


});