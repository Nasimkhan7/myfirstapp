const Home = () => {
  let name ="Nasim Khan";
  let laptop = {brand: "hp", price: 450060,processor: "i7", ram: "8Gb"};


  return (
    <div className="container">
      <h1>Home component</h1>
      <p>{name}</p>

       <div className="row mt-5">
         <div className="col-md">
           <ul className="list-group" style={{fontWight:600}}>
           <li className="list-group-item">Brand</li> 
           <li className="list-group-item">Price</li> 
           <li className="list-group-item">Processor</li>  
           <li className="list-group-item">Ram</li> 
           </ul>
         </div>
         <div className="col-md">
           <ul className="list-group">
             <li className="list-group-item">{laptop.brand}</li>
             <li className="list-group-item">{laptop.price}</li>
             <li className="list-group-item">{laptop.processor}</li>
             <li className="list-group-item">{laptop.ram}</li>
           </ul>
         </div>
       </div>

    </div>
  )
}
 export default Home;