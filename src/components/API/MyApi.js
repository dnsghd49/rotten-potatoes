import React, {}  from 'react'


// using https://reactjs.org/docs/faq-ajax.html as reference to implementing the code
class MyApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isloaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://imdb-api.com/en/API/SearchAll/k_zeuppxb1/games")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
        }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title} 
                {item.image}
                {item.description}
              </li>
            ))}
          </ul>
        );
      }
    }
}