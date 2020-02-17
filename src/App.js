import React,{Component} from 'react';

import './App.css';

class App extends Component{
  state={ products:[],
    product:{
    id:6,
    name:'sample',
    price:0
  },
  style:{
    width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  }
   }
 componentDidMount() {
this.getProducts();
 }
 getProducts = _ =>{
  fetch('http://localhost:4000/products')
  .then(response => response.json())
  .then(response =>this.setState({products:response.data}))
  .catch(err=>console.error(err))
 }
 addProduct = _ =>{
   const {product} =this.state;
   fetch(`http://localhost:4000/products/add?productid=${product.id}&name=${product.name}&price=${product.price}`)
  .then(this.getProducts)
   .catch(err=>console.error(err))

 }
renderProduct = ({productid,name,price}) =><div key={productid} style={{border:'1px solid blue', width:'300px',height:'50px',margin:'60px 60px 60px 60px'}}>
<table>
  <tbody>  
    <tr>
    <td>
    {productid}
    </td>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
  </tbody>

</table>



 
  
</div>
render(){
  const {products,product}=this.state;
  return(
    <div className='App'>
       
 
    
<div style={{ borderRadius: '5px',
  backgroundColor: '#f2f2f2',
  padding: '20px'}}>
<h1>ADD PRODUCTS</h1>
  <form style={{margin:'50px 20px 20px 20px'}}>
  <label>Product ID</label>
   <input  style={this.state.style} type="number"  onChange={e=>this.setState({ product:{...product,id:e.target.value}})} /> 
  
  <label>Product NAME</label>
   <input   style={this.state.style}  onChange={e=>this.setState({ product:{...product,name:e.target.value}})} /> 
 
 <label>Product PRICE</label>
 <input  style={this.state.style}  type="number"    onChange={e=>this.setState({ product:{...product,price:e.target.value}})} />

</form>
</div>
<button  style={{ width: '100%',
  backgroundColor:'#4CAF50',
  color: 'white',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'}}onClick={this.addProduct}>Add</button>
{products.map(this.renderProduct)}
    </div>
  );
} 
}

export default App;
