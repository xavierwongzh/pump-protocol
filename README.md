# The Pump Protocol
## Optimizing Petrol Station Efficiency Through Simulation

### ESD Term 6 - 40.015: Simulation Modeling and Analysis 

### An Agent-based modeling simulation for analyzing and optimizing petrol station operations.

## 🔍 Overview

The Pump Protocol lets you explore how arrival rates, pump counts, staffing levels, and pricing interact to affect throughput, customer wait times, pump utilization, and profitability at a petrol station. Use it to:

- Visualize cars arriving, queuing, fueling, and departing.
- Experiment with different system configurations.
- Observe real‑time statistics and charts for rejection rates and profit.

## 🚀 Live Demo

Try out the simulation in your browser:

🔗 https://pump-protocol-rho.vercel.app/

---

## ✨ Features

- **Interactive Controls**  
  - **Arrival Probability**: Adjust the likelihood that a new car arrives each tick.  
  - **Departure Probability**: Set how long it takes for driver to pay.  
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

## 📦 Installation

Just clone the repository and open `index.html`. It runs out of the box.

```bash
# Clone the repo
git clone https://github.com/xavierwongzh/pump-protocol.git
cd pump-protocol

# Open index.html in your browser
# (Double-click or use your browser’s "Open File" menu)
```

---

## 🎮 Usage

1. **Start/Pause** the simulation by clicking anywhere on the simulation surface.  
2. **Adjust sliders** for arrival/departure probability and gas price.  
3. **Select** the number of pumps and workers from the dropdowns.  
4. **Watch** the statistics update in real time and inspect the charts below the controls.  
5. **Experiment** with different settings to find the optimal configuration!

---

## 📂 Project Structure

    /
    ├── audio/                   # Sound effects (optional)
    ├── fonts/                   # Custom fonts
    ├── images/                  # Car, driver, environment assets
    ├── lib/
    │   ├── d3.min.js            # D3.js visualization library
    │   └── Gas Station Simulation.js  # Simulation logic
    ├── styles/
    │   └── Gas Station Simulation.css # Custom styles
    ├── index.html               # The Simulation
    └── README.md                # You are here
 
---

## 🎨 Assets

Assets by LimeZu: https://limezu.itch.io/

## 🎵 Music

- **Class Klown**: “Matcha Latte”
- **DM DOKURO**: “Silence Before the Storms”, “Sanctuary”