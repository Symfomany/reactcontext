### Props Children

There is also props.children property that gives us an access to the child components passed by the owner of the component. For example:

```
class Title extends React.Component {
  render() {
    return (
      <h1>
        { this.props.text }
        { this.props.children }
      </h1>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <Title text='Hello React'>
        <span>community</span>
      </Title>
    );
  }
};
```


## Composition Atomiques

```
    <App>
        <Header>
            <Navigation> ... </Navigation>
        </Header>
    </App>
```
We may consider the App as a place where we wire stuff, as an entry point. So, it’s a good place for such composition. 


## Passing a child as a property

This technique is helpful when we have a mix between components that exist inside the Header and components that have to be provided from the outside.


```
<Header icon={Icon} logo={logo} title={Title} />

```

### HOC: Hight Order Component

```
const config = require('path/to/configuration');

const enhanceComponent = (Component) =>
  class Enhance extends React.Component {
    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          title={ config.appTitle }
        />
      )
    }
  };

    export default enhanceComponent;
```
Very often we expose a factory function that accepts our original component and when called returns the enhanced/wrapped version of it. For example:



```
// Title.jsx
export default function Title(props) {
return <h1>{ props.title }</h1>;
}

// Header.jsx
import Title from './Title.jsx';
export default function Header() {
return (
    <header>
    <Title />
    </header>
);
}

// App.jsx
import Header from './Header.jsx';
class App extends React.Component {
constructor(props) {
    super(props);
    this.state = { title: 'React in patterns' };
}
render() {
    return <Header />;
}
};
```
The string “React in patterns” should somehow reach the Title component. The direct way of doing this is to pass it from App to Header and then Header to pass it to Title

We already saw how the higher-order component may be used to inject data. 


Amélioration pour passer des données à Title du titre:

```
// enhance.jsx
const title = 'React in patterns';

// fabrique à composant avec le title
const enhanceComponent = (Component) =>
class Enhance extends React.Component {
    render() {
    return (
        <Component
        {...this.state}
        {...this.props}
        title={ title }
        />
    )
    }
};

// Header.jsx
import enhance from './enhance.jsx';
import Title from './Title.jsx';

// amélioration de Title
const EnhancedTitle = enhance(Title);

export default function Header() {
return (
    <header>
        <EnhancedTitle />
    </header>
);
}
```

### Context

* React has the concept of context. The context is something that every component may have access to.
* It’s something like an event bus but for data. 
* A single model which we can access from everywhere.