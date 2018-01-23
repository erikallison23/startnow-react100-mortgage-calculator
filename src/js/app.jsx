import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '15',
      output: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  };
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log("name: ", name);
    console.log("value: ", value);
    this.setState({
      [name]: parseFloat(value)
    })
  };
  calc(balance, rate, term) {
    const p = balance;
    const r = ((rate * 1) / 100 / 12);
    const t = parseInt(term) * 12;
    const m = p * (r * Math.pow((1 + r), t)) / (Math.pow((1 + r), t) - 1);

    console.log(m);
    return m;
  };
  submit(event) {
    event.preventDefault();
    const pay = '$' + this.calc(this.state.balance, this.state.rate, this.state.term).toFixed(2) + ' is your payment' || '';
    this.setState({
      output: pay
    })
  };


  render() {
    return (
      <div className='container'>

        <div className='row'>
          <div className='col-md-4 col-centered'>
            <label className='label'> Loan Balance </label>
            <div className='control'>
              <input name='balance' onChange={this.handleChange} placeholder='Enter Balance' defaultValue={this.state.balance} className='input' type='number' />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4 col-centered'>
            <label className='label'> Interest Rate % </label>
            <div className='control'>
              <input name='rate' onChange={this.handleChange} placeholder='Enter Rate' defaultValue={this.state.rate} className='input' type='number' step='0.01' />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4 col-centered'>
            <label className='label'> Loan Term (Years) </label>
            <div className='control'>
              <select name='term' onChange={this.handleChange} defaultValue={this.state.term} className='select'>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-centered'>
            <button className='submit btn-lg' onClick={this.submit} >Submit</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4 col-centered'>
            <div id='output' className='output-notification'  >{this.state.output} </div>
          </div>
        </div>
      </div>
    );
  }
}; 