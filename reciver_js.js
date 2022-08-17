var amqp = require('amqplib/callback_api');
// var amqpChannel = null;

let config = {
  protocol: 'amqp',
  hostname: '44.201.144.141',
  username: 'guest',
  password: 'guest'
  };
  amqp.connect(config, function(error0, connection) {
  if (error0) {
      throw error0;
  }
  connection.createChannel(function(error1, channel) {
      if (error1) {throw error1;}
  
      var queue = 'hello';
  
      channel.assertQueue(queue, {
          durable: false
      });
  
      console.log(" [*] Waiting for messages", queue);
  
      channel.consume(queue, function(msg) {
  
  
          let consumedData = msg.content.toString();
  
          // Other process by calling api .
  
          console.log(" [x] Received ", consumedData);
  
      }, {
          noAck: true
      });
  });
  });
// amqp.connect('amqp://guest:guest@44.201.144.141', (err, conn) => {
//     conn.createChannel((err, ch) => {
//         if (err) {
//             console.error(err);
//         } else {
//             amqpChannel = ch;
//         }
//     });
// });

// var readMessageFromQueue = function() {
  
//     if (amqpChannel) {
//       // console.log('hei')
//         amqpChannel.get('hello', data => {
//           console.log(data)
//             // data will be set to false if no messages are available on the queue.
//             if (data) {
//                 console.log(data.content.toString());
//                 amqpChannel.ack(data);
//             }

            
//         });
//     }
// }

// // Whatever interval you like..
// setInterval(readMessageFromQueue, 1000);