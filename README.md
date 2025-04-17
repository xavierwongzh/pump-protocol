# The Pump Protocol

### ESD Term 6 - 40.015: Simulation Modeling and Analysis 

### An Agent-based modeling simulation for analyzing and optimizing petrol‐station operations.


## 🔍 Overview

The Pump Protocol lets you explore how arrival rates, pump counts, staffing levels, and pricing interact to affect throughput, customer wait times, pump utilization, and profitability at a petrol station. Use it to:

- Visualize cars arriving, queuing, fueling, and departing.
- Experiment with different system configurations.
- Observe real‑time statistics and charts for rejection rates and profit.

---

[![Live Demo](https://img.shields.io/badge/demo-online-blue)](https://pump-protocol-rho.vercel.app/)

---

## 🚀 Live Demo

Try out the simulation in your browser:

🔗 https://pump-protocol-rho.vercel.app/

---

## ✨ Features

- **Interactive Controls**  
  - **Arrival Probability**: Adjust the likelihood that a new car arrives each tick.  
  - **Departure Probability**: Set how quickly waiting cars give up and leave.  
  - **Gas Price**: Simulate revenue by changing the price per litre.  
  - **Animation Speed**: Slow down or speed up the simulation.

- **Resource Configuration**  
  - **Gas Pumps**: Choose between 2 and 24 pumps.  
  - **Station Workers**: Configure 1–3 attendants.

- **Live Metrics**  
  - Average percentage of cars rejected.  
  - Average pump duration (in simulation steps).  
  - Average time in system (in simulation steps).  
  - Average fuel dispensed per car (in litres).

- **Dynamic Charts**  
  - **Rejection Rate Chart**: Track how many cars abandon the station over time.  
  - **Profit Chart**: See cumulative revenue based on your pricing and throughput.

---

## 🛠️ Technologies

- **Core**: HTML5, CSS3, JavaScript (ES6+)  
- **Visualization**: [D3.js](https://d3js.org/)  
- **Charting**: [Plotly.js](https://plotly.com/javascript/)  
- **Assets**: SVG, PNG, GIF animations for cars and environment  

---

## 📦 Installation

Just clone the repository and open `index.html`. It runs out of the box.

```bash
# Clone the repo
git clone https://github.com/xavierwongzh/pump-protocol.git
cd pump-protocol

# Open index.html in your browser
# (Double-click or use your browser’s "Open File" menu)
