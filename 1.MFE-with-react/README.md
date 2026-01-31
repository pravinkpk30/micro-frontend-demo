# Micro-Frontend Pharmacy Management System

This project demonstrates a Micro-Frontend architecture using **React** and **Webpack 5 Module Federation**. It simulates a Pharmacy Management System composed of three separate applications working together seamlessly.

## 🏗 Architecture

The system consists of three independent applications:

### 1. Host Application (`host`) - Port 3000

- **Role**: The container application (Shell).
- **Function**: It acts as the main dashboard, integrating features from the other micro-frontends.
- **Features**:
  - Global Navigation (Sidebar).
  - Dashboard Overview (Composite view).
  - Routing to specific sub-modules.
- **Tech**: React, Webpack 5 (Module Federation Plugin).

### 2. Product Catalog (`child-components`) - Port 3001

- **Role**: Remote Application (Micro-frontend).
- **Function**: Manages the display of pharmaceutical products.
- **Exposes**: `ProductList` component.
- **Features**:
  - Displays a grid of medicine products.
  - Responsive Card layout.
- **Tech**: React, Webpack 5.

### 3. Inventory Manager (`child-todolist`) - Port 3002

- **Role**: Remote Application (Micro-frontend).
- **Function**: Manages the drug inventory system (CRUD).
- **Exposes**: `DrugManager` component.
- **Features**:
  - Add, Edit, and Delete drug entries.
  - State management using React Hooks.
- **Tech**: React, Webpack 5.

---

## 🚀 Getting Started

To run the entire system, you need to start all three applications simultaneously.

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

Navigate to the project root and install dependencies for each application:

```bash
# Install dependencies for Host
cd host
npm install

# Install dependencies for Child Components
cd ../child-components
npm install

# Install dependencies for Child TodoList
cd ../child-todolist
npm install
```

### Running the Applications

Open **three** separate terminal windows and run the following commands:

**Terminal 1: Product Catalog (Port 3001)**

```bash
cd child-components
npm start
```

**Terminal 2: Inventory Manager (Port 3002)**

```bash
cd child-todolist
npm start
```

**Terminal 3: Host Application (Port 3000)**

```bash
cd host
npm start
```

### Accessing the App

Once all servers are running, open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🎨 Theme & Design

The project uses a unified **Medical Teal & Gray** theme consisting of:

- **Primary Color**: Teal (`#008080`)
- **Background**: Light Gray-Blue (`#f0f4f8`)
- **Components**: Consistent styling for Cards, Buttons, and Inputs shared via a common CSS strategy (simulated for this demo).

## 🛠 Technology Stack

- **Core**: React 18
- **Bundler**: Webpack 5
- **Architecture**: Module Federation
- **Transpiler**: Babel
- **Styling**: Vanilla CSS
