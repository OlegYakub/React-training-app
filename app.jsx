var Hello = React.createClass({

  getInitialState: function() {
      return {
          subtitle: "Hello Oleg",
          clicked: false,
      };
  },

  sayHello: function() {
    this.setState({clicked: !this.state.clicked});
  },

  isActive: function() {
    if (this.state.clicked) {
      return "active"
    } else {
      return ''
    }
  },

  render: function(){
    return(<div>
      <h1>{this.props.title}</h1> 
      <h2>{this.state.subtitle}</h2> 
      <p>My framework</p> 
      <button onClick={this.sayHello} className={this.isActive('')}>say hello!</button>
    </div>);
  }
});


//clock component
var Clock = React.createClass({
  getInitialState: function() {
    return {
      date: new Date()
    }
  },

  componentDidMount(){
    this.timerId = setInterval(() => this.tick(), 1000 );
  },

  tick() {
    this.setState({
      date: new Date()
    });
  },

  componentWillUnmount() {
    clearInterval(this.timerId);
  },

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  },
});

//list component
const propsList = [
  "HTC U Ultra", 
  "iPhone 7", 
  "Google Pixel", 
  "Hawei P9", 
  "Meizu Pro 6", 
  "Asus Zenfone 3"
]

var Item = React.createClass({
  render(){
    return <li>{this.props.text}</li>
  }
})

var List = React.createClass({
  render() {
    return(
        <ul>
          {
            this.props.data.map(function(item){
                return <Item text={item} key={item} />
            })  
          }
        </ul>) 
  }
})

ReactDOM.render(
  <Hello title={"This is React!"} />,
  document.getElementById('header')
)

ReactDOM.render(
  <Clock />,
  document.getElementById('time')
)

ReactDOM.render(
  <List data={propsList} />,
  document.getElementById('list')
)