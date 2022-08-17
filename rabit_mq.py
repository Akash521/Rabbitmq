# from amqpstorm import Connection
# from amqpstorm import Message
# connection = Connection('44.201.144.141', 'guest', 'guest')
# channel = connection.channel()
# # Message Properties.
# properties = {
#     'content_type': 'text/plain',
#     'headers': {'key': 'value'}
# }

# # Create the message.
# message = Message.create(channel=channel, body='Hello World!', properties=properties)
# message.publish(routing_key='simple_queue')

import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('44.201.144.141'))
channel = connection.channel()
channel.queue_declare(queue='hello')
channel.basic_publish(exchange='',
                      routing_key='hello',
                      body='Hello Worldjjj!')
print(" [x] Sent 'Hello World!'")
# connection.close()