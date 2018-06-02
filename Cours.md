### Contenu du Cours

* Using Ref (Comportement JS/HTML: focus, input qui se vide et qui vibre) OU atteindre un Composant
* Comment créer des Components différement... props , function et Hoc
* Passer des Childrens des props: design Pattern Communication
* Parler du Context
* Parle de PropsTypes et DefaultProps
* Cours sur le HOC: Hight order Components
* natures des Composants: composant de Présentation (Presenters), Composant Metier (Containers) 
### Astuces du Cours


Paser de fonctiond e composant stateless ----->>> à Hight Order Components

### Questions du Cours


* Comment créer tout un thème?
* Comment passer des props ?


### Multi-Import


import Button from '../../../../Button/Button.jsx';
import Icon from '../../../../Icon/Icon.jsx';
import Footer from '../../Footer/Footer.jsx';

import {Button, Icon, Footer} from 'Components';


### Store

My suggestion is this:
Work out the general structure of your components and the data they will require
Design your store to support those requirements
Do whatever you need to do to your incoming data to make it fit into the store.

