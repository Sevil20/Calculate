import React, { Component } from 'react'

 class Calculate extends Component {
    state = {
     value:'',
     
    }
    handleNumber = (e) =>{
        this.setState({value:e.target.value})
    }
    clickHandler1 = (e) =>{
        this.setState({value:e.target.value++})
    }
    clickHandler2 = (e) =>{
        this.setState({value:e.target.value--})
    }
  render() {
    return (
      <div style={{textAlign:'center'}}><p><h1>Calculate</h1>
        <input value={this.state.value} className='number' style={{padding:'15px',borderRadius:'10px',fontSize:'20px'}}
            id="name"
            name="toplama"
            placeholder='write number'
            type='text'
            onChange={(e)=>this.handleNumber(e)}></input>
            <br></br>
            <div style={{padding:'20px'}}><button style={{marginRight:'20px',backgroundColor:'darkblue',fontSize:'18px',color:'#fff'}} type='button' className='btn-plus' onClick={this.clickHandler1} name='plus'>+</button>
      <button style={{marginRight:'20px',backgroundColor:'darkblue',fontSize:'18px',color:'#fff'}} type='button' className='btn-minus' onClick={this.clickHandler2} name='minus'>-</button></div>
      </p>
      </div>
    )
  }
}
export default Calculate