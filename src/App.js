import React, {Component} from 'react';

class App extends Component {
  state = {
    noticias: []
   }

  //Llamado a API
componentDidMount() {
    this.consultarNoticias();
  }

consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=19aa6dd2908a492cbb301ed1f2936a02`

    const res = await fetch(url);
    const noticias = await res.json();

    this.setState({
      noticias : noticias.articles
    })
  }

  render() {
    return (
      <h1>News App</h1>
    );
  }
}

export default App;

