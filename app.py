from threading import Thread
from flask import Flask, render_template, jsonify
from scapy.all import sniff

app = Flask(__name__)

packets = []

def packet_callback(packet):
    packets.append(packet.summary())

def capture_packets():
    sniff(prn=packet_callback, store=False)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/packets', methods=['GET'])
def get_packets():
    return jsonify(packets)

if __name__ == '__main__':
    capture_thread = Thread(target=capture_packets)
    capture_thread.start()
    app.run(debug=True)
