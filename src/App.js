import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  	constructor () {
		super();
		this.state = {
			products: [],
			loading: true
    	}
		this.db = firebase.firestore();
  	}
	componentDidMount() {
		this.db
			.collection('products')
			.onSnapshot((snapshot) => {
				const products = snapshot.docs.map((doc) => {
					const data = doc.data();
					data['id'] = doc.id;
					return data;
				});
				this.setState({
					products,
					loading: false
				});
			})	
	}
  	handleIncreaseQuantity = (product) => {
      	const {products} = this.state;
      	const index = products.indexOf(product);
		const docRef = this.db.collection('products').doc(products[index].id)
		
		// products[index].qty += 1;
		// this.setState({
			// products: products
		// })

		docRef	
			.update({
				qty: products[index].qty + 1
			})
			.then(() => {
				console.log('Updated successfully');
			})
			.catch((err) => {
				console.log('Error: ', err);
			})
	}
	handleDecreaseQuantity = (product) => {
		const {products} = this.state;
		const index = products.indexOf(product);

		if(products[index].qty === 0){
			return;
		}
		
		// products[index].qty -= 1;
		// this.setState({
			// products: products
		// })

		const docRef = this.db.collection('products').doc(products[index].id)
		docRef	
			.update({
				qty: products[index].qty - 1
			})
			.then(() => {
				console.log('Updated successfully');
			})
			.catch((err) => {
				console.log('Error: ', err);
			})
	}
	handleDeleteProduct = (id) => {
		// const {products} = this.state;
		// const items = products.filter((item) => item.id !== id);
		// this.setState({
		// 	products: items
		// })

		const docRef = this.db.collection('products').doc(id);
		docRef
			.delete()
			.then(() => {
				console.log('Deleted successfully');
			})
			.catch((err) => {
				console.log('Error: ', err);
			})
	}
	getCartCount = () => {
		const {products} = this.state;
		let count = 0;
		products.forEach((product) => {
		count += product.qty;
		})
		console.log(count);
		return count;
	}
	getCartTotal = () => {
		const {products} = this.state;
		let cartTotal = 0;
		products.map((product) => {
			cartTotal += product.qty*product.price;
			return '';
		})
		return cartTotal;
	}
	addProduct = () => {
		this.db
			.collection('products')
			.add({
				img: '',
				price: 900,
				qty: 2,
				title: 'Washing Machine'
			})
			.then((docRef) => {

			})
			.catch((err) => {
				console.log('Error: ', err);
			})
	}
	render () {
		const {products, loading} = this.state;
		return (
			<div className="App">
				<Navbar count={this.getCartCount()}/>
				{/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a Product</button> */}
				<Cart 
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handleDeleteProduct}
					products={products}
				/>
				{loading && <h1>Loading Products ...</h1>}
				<div style={{padding:10, fontSize:20}}> TOTAL: {this.getCartTotal()} </div>
			</div>
		);
	}
}

export default App;
