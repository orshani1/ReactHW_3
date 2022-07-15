import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class ListOfUrl extends React.Component
{
  
  constructor(props){
   super(props);
   this.state = {list:['https://www.orshani.com','https://www.orshani.com']};
   this.handleSubmit = this.handleSubmit.bind(this);
   this.sortList = this.sortList.bind(this);
   this.handleRemove = this.handleRemove.bind(this);
   this.isReveresd = false;
   this.isDelete = false;
   this.isEdit = false;
  }

  handleRemove(value)
  {

   let list = this.state.list;
   
    list.map(e=> {
    if(e === value){
      let index = list.indexOf(e);
      list.splice(index,1);
    }
  })
  this.setState({list:list});
}
  handleSubmit (e){

    e.preventDefault();
    let value =  e.target.urlInput.value; /// get target value 
    let list = this.state.list; /// assign state list to own variable
    list.push(value);// push the new input to the list
    e.target.urlInput.value = '';//Reset the input 
    this.setState({list:list});//Change the state
    }

  sortList(){
      
      let list = this.state.list;
      if(this.isReveresd){
        list.sort();
        list.reverse();
      }
      else{

        list.sort();///SORT BY ALPHA TRY CHECK WHY NOT WORKING 
      }
      this.setState({list:list});
      this.isReveresd = !this.isReveresd;
  }
  render(){
    const list = this.state.list;
    return(
  <>
   

  <ul>
    {list.map(e=>
      <li>{e} <button onClick={()=>{
        this.handleRemove(e);
      }} >Delete</button>
    
     
    
     
      </li>
    )}
  </ul>
  <button onClick={this.sortList}>Sort</button>
  <form onSubmit={this.handleSubmit}>
    <input type="text" name="urlInput" />
    <input type='submit' value={'Submit'} />
  </form>
  </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ListOfUrl></ListOfUrl>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
