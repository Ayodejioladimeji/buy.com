import React, { Component, createContext } from 'react'
import {storeProducts, detailProduct} from './data'


const ProductContext = createContext();

class ProductProvider extends Component {

    // THE STATE OF THE APP
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0
    };

    // THE SECTION OF THE USEEFFECT
    componentDidMount(){
        this.setProducts();
    }


    // THE SET PRODUCTS FUNCTIONS
    setProducts = ()=>{
        let tempProducts = [];
        storeProducts.forEach((item)=>{
            const singleItem = {...item};
            tempProducts  = [...tempProducts, singleItem];
        });

        this.setState(()=>{
            return{products:tempProducts};
        })
    }


    // THE SECTION THAT GETS THE ITEMS ID OF EACH PRODUCTS
    getItem = (id)=>{
        const product = this.state.products.find(item=> item.id === id);
        return product;
    }


    //  THE SECTION OF THAT HANDLES THE DETAILS
    handleDetail = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return(
                {detailProduct:product}
            )
        })
    }
    

    // THAT SECTION THAT ADDS THE ITEMS TO THE CART
    addToCart = (id)=>{
       let tempProducts = [...this.state.products];
        const index =  tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(()=>{
            return{
                products :tempProducts, cart:[...this.state.cart, product]
            }
        },()=>{
            this.addTotal();
        })
    }


     // THE SECTION OF THE OPEN MODALS
     openModal = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{
                modalProduct:product, modalOpen:true
            }
        })
    }

    // THE SECTION OF THE CLOSE MODAL
    closeModal = ()=>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }


    // THE INCREMENT METHOD
    increment = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=> item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{
            return{
                cart:[...tempCart]
            };
        }, ()=>{
            this.addTotal();
        })
    }


    // THE DECREMENT METHOD
    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=> item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        
        if(product.count === 0){
            this.removeItem(id);
        }
        else{
            product.total  = product.count * product.price;

            this.setState(()=>{
                return{
                    cart:[...tempCart]
                };
            }, ()=>{
                this.addTotal();
            })
        }
        
    }



    // THE REMOVE ITEM METHOD
    removeItem = (id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item=>item.id !== id); 

        const index = tempProducts.indexOf(this.getItem(id));

        let removedProduct = tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        }, ()=>{
            this.addTotal()
        })

    }


    // THE CLEAR CART METHOD
    clearCart = ()=>{
        this.setState(()=>{
            return{
                cart:[]
            }
        },()=>{
            this.setProducts();
            this.addTotal();
        })
    }



    // THE FUNCTION OF THE ADD TOTAL
    addTotal=()=>{
        let subTotal = 0;
        this.state.cart.map(item=>(subTotal += item.total));
        // const tempTax = subTotal * 0.1;
        // const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal;
        // const total = subTotal + tax;

        this.setState(()=>{
            return{
                cartSubtotal: subTotal,
                // cartTax: tax,
                cartTotal: total
            }
        })
    }
    
    render() {
        return (
            <ProductContext.Provider 
                value={{...this.state,
                handleDetail:this.handleDetail, 
                addToCart:this.addToCart, 
                openModal:this.openModal, 
                closeModal:this.closeModal, 
                increment:this.increment, 
                decrement:this.decrement, 
                removeItem:this.removeItem, 
                clearCart:this.clearCart
                }}
            >

            {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};