import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * CartContext - Manages cart state for child-to-parent communication in MFE architecture
 * 
 * This context provides:
 * - cartItems: Array of items in the cart
 * - cartCount: Total number of items in cart
 * - addToCart: Callback function to add items (passed to child MFEs)
 * - removeFromCart: Function to remove items from cart
 * - clearCart: Function to clear all items from cart
 */

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    /**
     * Add to Cart - Callback function for child-to-parent communication
     * 
     * This function is passed as a prop to child micro-frontend components (ProductList)
     * When child calls this function, it communicates data back to the parent (host app)
     * 
     * @param {Object} product - Product object to add to cart
     */
    const addToCart = useCallback((product) => {
        setCartItems(prevItems => {
            // Check if product already exists in cart
            const existingItem = prevItems.find(item => item.id === product.id);
            
            if (existingItem) {
                // Increment quantity if product exists
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new product with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        
        console.log(`[Child-to-Parent Communication] Product added to cart:`, product.name);
    }, []);

    /**
     * Remove from Cart
     * @param {number} productId - ID of product to remove
     */
    const removeFromCart = useCallback((productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }, []);

    /**
     * Clear Cart
     */
    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    // Calculate total cart count
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const value = {
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

/**
 * Custom hook to use cart context
 */
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export default CartContext;
