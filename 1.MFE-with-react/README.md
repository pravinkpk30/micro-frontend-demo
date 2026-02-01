# Micro-Frontend Pharmacy Management System

This project demonstrates a Micro-Frontend architecture using **React**, **Vue.js**, and **Webpack 5 Module Federation**. It simulates a Pharmacy Management System composed of four separate applications (Host + 3 Remotes) working together seamlessly.

## 🏗 Architecture

The system consists of four independent applications:

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

### 4. Global Inventory (`child-vueapp`) - Port 3003

- **Role**: Remote Application (Micro-frontend).
- **Function**: Provides a global read-only view of drug inventory with stock status.
- **Exposes**: `InventoryList` and `mount` function (for React integration).
- **Features**:
  - Vue 3 Component inside React Host.
  - Reactive Inventory Table.
- **Tech**: Vue 3, Webpack 5.

---

## 🚀 Getting Started

To run the entire system, you need to start all four applications simultaneously.

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

# Install dependencies for Child Vue App
cd ../child-vueapp
npm install
```

### Running the Applications

Open **four** separate terminal windows and run the following commands:

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

**Terminal 4: Host Application (Port 3000)**

```bash
cd host
npm start
```

### Accessing the App

Once all servers are running, open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## ✅ Validating Remote Entries (Module Federation)

Each Micro-Frontend exposes a special file called `remoteEntry.js`. This file is the entry point that the Host application uses to load the remote components. You can access these files directly in the browser to verify that the Micro-Frontends are running and exposing modules correctly.

| Application           | URL                                                                          | Purpose                                                               |
| :-------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Product Catalog**   | [http://localhost:3001/remoteEntry.js](http://localhost:3001/remoteEntry.js) | Validates that `ProductList` is exposed as defined in Webpack config. |
| **Inventory Manager** | [http://localhost:3002/remoteEntry.js](http://localhost:3002/remoteEntry.js) | Validates that `DrugManager` is exposed as defined in Webpack config. |
| **Global Inventory**  | [http://localhost:3003/remoteEntry.js](http://localhost:3003/remoteEntry.js) | Validates that `childVueapp` is exposed (Vue 3 App).                  |

**How to interpret:**
When you open these URLs, you should see a JavaScript file content. This confirms that:

1. The Micro-Frontend is running.
2. The `ModuleFederationPlugin` is correctly configured.
3. The `filename: 'remoteEntry.js'` is properly set.

---

## 🎨 Theme & Design

The project uses a unified **Medical Teal & Gray** theme consisting of:

- **Primary Color**: Teal (`#008080`)
- **Background**: Light Gray-Blue (`#f0f4f8`)
- **Components**: Consistent styling for Cards, Buttons, and Inputs shared via a common CSS strategy (simulated for this demo).

## 🛠 Technology Stack

- **Core**: React 18, Vue 3
- **Bundler**: Webpack 5
- **Architecture**: Module Federation
- **Transpiler**: Babel
- **Styling**: Vanilla CSS
