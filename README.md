#NetViz_Real_Time_Network_Traffic_Analyzer

This project is a network traffic monitoring tool that captures, logs, analyzes, and visualizes network packets using Python and Flask.

## Features

- **Packet Capture**: Captures network packets using Scapy.
- **Packet Logging**: Logs packet summaries for later analysis.
- **Packet Analysis**: Analyzes packets for patterns and anomalies.
- **Data Visualization**: Visualizes network data using a web interface with Chart.js.

## Technologies Used

- **Python**: Main programming language.
- **Flask**: Web framework for the frontend.
- **Scapy**: Library for network packet capture and analysis.
- **Chart.js**: JavaScript library for data visualization.

## Project Structure
```plaintext
network_tool/
├── app.py
├── templates/
│ └── index.html
└── static/
└── scripts/
└── chart.js
```

## Setup Instructions

### Prerequisites

- Python 3.x
- Pip (Python package installer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/network_tool.git
   cd network_tool
   
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   
3. Install the required Python packages:
  ```bash
  pip install flask scapy
```
## Running the Application
1. Run the Flask application:
```bash
python app.py
```
2. Open your web browser and navigate to http://127.0.0.1:5000/ to view the network traffic data visualization.

## How It Works
- The application uses Scapy to capture network packets.
- Captured packets are logged and summarized.
- A Flask web server serves a web interface to display the packet summaries.
- Chart.js is used to visualize the packet data on the web interface.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.
