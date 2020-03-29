import redis from 'redis';

const client = redis.createClient();

client.on('error', (error) => {
  console.error(error);
});

client.on('ready', () => {
  console.log('ready');
});

client.set('fulano', 'detal', (...p) => {
  console.log(p);
  client.get('fulano', (...p2) => {
    console.log(p2);
  });
});

setInterval(() => {
  client.set('fulano', 'detal', (...p) => {
    console.log(p);
  });
}, 1000);
