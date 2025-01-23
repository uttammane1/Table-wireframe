# Dynamic Table with Dropdowns and Dark/Light Mode Toggle

This is a **dynamic table** built with **React** that allows users to interact with the table's content through **dropdown menus**, and it includes a **dark/light mode toggle** to enhance the user experience. This project showcases how React components can work together to build an interactive UI.

## Features

- **Dynamic Table**: Add rows to the table dynamically. Each row contains a dropdown menu.
- **Dropdown Menus**: Choose values from dropdowns inside each row.
- **Dark/Light Mode Toggle**: A round toggle button that switches between dark and light themes.
- **Responsive Design**: The table adjusts to different screen sizes, making it mobile-friendly.

## Live Demo

You can try out the project directly in your browser by visiting the following link:
[Live Demo](https://your-demo-link.com) (Replace with your actual live demo URL)

## Screenshots

![Macbook-Air-table-wireframe-chi vercel app (1)](https://github.com/user-attachments/assets/c3227351-6d9d-4ae2-b635-b4de4685298a)

*Dark Mode View*

![Macbook-Air-table-wireframe-chi vercel app](https://github.com/user-attachments/assets/855703c2-0c0b-4e88-94bc-b04c97b0fbbc)

*Light Mode View*

## How It Works

1. **Dark/Light Mode Toggle**:  
   On the top right corner of the app, there's a round toggle button. When you click it, it switches between **dark mode** (with a black background and white text) and **light mode** (with a white background and dark text). This is achieved by toggling CSS classes using React state management.

2. **Dynamic Table**:  
   The table starts with a single row but allows users to add more rows by clicking the **Add Row** button. Each row contains dropdown menus where users can select values. These dropdowns are powered by the `react-select` library.

3. **Add/Remove Rows**:  
   The **Add Row** button adds a new row to the table with its own dropdowns. Each row has a **Delete** button to remove that row from the table dynamically.

4. **Responsive Design**:  
   The table layout adapts to different screen sizes using CSS media queries. The table and buttons will adjust to fit smaller screens when viewed on mobile devices.


