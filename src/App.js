import React, { Component, createContext } from 'react';
import './App.css';

const content = {
  en: [
    {
      toUkr: "ukr",
      toEng: "en"
    },
    {
      full_name: 'Andrii Soroka',
      phone: ['phone', '063768542'],
      mail: [' mail', 'dree0103@gmail.com'],
      age: ['age', 23],
      nationality: ['nationality', 'Ukrainian'],
      city: ['city', 'Lviv'],
    },
    {
      title: "GOAL",
      bold_text: "",
      text: "I am looking for a job as Junior front-end developer  in a company of curious and active people.",
      list: []
    },{
      title: "SKILLS",
      bold_text: "",
      text: "",
      list: ['HTML', 'CSS', 'JavaScript']
    },{
      title: "WORK EXPERIENCE",
      bold_text: "February 2018 – April 2018",
      text: "Administrator, “ESCAPE QUEST” ",
      list: []
    },{
      title: "EDUCATION",
      bold_text: "Lviv Polytechnic National University ",
      text: "Master Degree. Field of study ‘Publishing information technologies’.",
      list: []
    },{
      title: "COURSES",
      bold_text: "",
      text: "Successfully finished JavaScript course at ‘OKTENWEB UNIVERSITY’ and also passed such online courses as:",
      list: ['Codecademy', 'W3Schools', 'HTML Academy']
    },{
      title: "INTERESTS",
      bold_text: "",
      text: "Triathlon (swimming, biking and running), computer games, traveling, hiking in the mountains.",
      list: []
    }
  ],
  ukr: [
    {
      toUkr: "укр",
      toEng: "англ",
    },
    {
      full_name: 'Андрій Сорока',
      phone: ['телефон', '063768542'],
      mail: ['пошта', 'dree0103@gmail.com'],
      age: ['вік', 23],
      nationality: ['національність', 'українець'],
      city: ['місто', 'Львів'],
    },{
      title: "ЦІЛЬ",
      bold_text: "",
      text: "Я шукаю роботу як молодшого фронт-розробника в компанії цікавих та активних людей.",
      list: []
      }, {
      title: "НАВИКИ",
      bold_text: "",
      text: "",
      list: ['HTML', 'CSS', 'JavaScript']
    }, {
      title: "ДОСВІД РОБОТИ",
      bold_text: "Лютий 2018 - квітень 2018 року ",
      text: "Адміністратор, 'ESCAPE QUEST' ",
      list: []
    }, {
      title: "ОСВІТА",
      bold_text: "Національний університет 'Львівська політехніка'",
      text: "Магістр, Сфера навчання 'Видавнича діяльність інформаційних технологій'.",
      list: []
    }, {
      title: "КУРСИ",
      bold_text: "",
      text: "Успішно закінчив курс JavaScript на 'ОКТЕНВЕБ УНІВЕРСИТЕТ', а також пройшов такі онлайн курси:",
      list: ['Codecademy', 'W3Schools', 'HTML Academy']
    }, {
      title: "ІНТЕРЕС",
      bold_text: "",
      text: "Триатлон (плавання, їзда на велосипеді та біг), комп'ютерні ігри, подорожі, походи в гори.",
      list: []
    }
  ]
};

const LanguageContext = createContext();

class Header extends React.Component {
  render () {
    return (
      <header className="main-header">
        <MainInfo mainInfo={this.props.mainInfo} />
        <Foto />
      </header>
    )
  } 
}

class MainInfo extends React.Component {
  render () {
    return (
      <div className="main-info">
        {Object.keys(this.props.mainInfo).map(item => <InfoItem key={item} item={item} info={this.props.mainInfo[item]} />)}
      </div>
    )
  }
}

class InfoItem extends React.Component {
  render () {
    return (
    <div>{this.props.item !== 'full_name' ? (<span>{this.props.info[0]}: </span>): ('')}
    {this.props.item !== 'full_name' ? (<span>{this.props.info[1]}</span>) : <h2>{this.props.info}</h2>}
    </div>
    )
  }
}

class Foto extends React.Component {
  render () {
    return (
      <div>
        <img src="" alt="my foto" /> 
      </div>
    )
  }
}

class Item extends React.Component {
  render () {
    return (
      <div className="item">
        <div>{this.props.item.title}</div>
        <div className="item-info">
          <div>{this.props.item.bold_text}</div>
          <div>{this.props.item.text}</div>
          <ul>{ this.props.item.list.length > 0 ?
          this.props.item.list.map((item, index) => <Skill key={index} item={item}/>)
          : ("")}</ul>
        </div>
      </div>
    )
  }
}

class MainArticle extends React.Component {
  render () {
    return (
      <article className="main-article">
        {this.props.items.map((item, index) => <Item key={index} item={item}/>)}
      </article>
    )
  }
}



class Skill extends React.Component {
	render() {
		return (
			<li>{this.props.item}</li>
		)
	}
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "en"
    };
  }
  render() {
    return (
      <LanguageContext.Provider value={content[this.state.language]}>
      <div>
        <LanguageContext.Consumer>
          {content => {
            return (
              <div>
                <div>
                  <button onClick={() => this.setState({ language: "en" })}>
                    {content[0].toEng}
                  </button>
                  <button onClick={() => this.setState({ language: "ukr" })}>
                    {content[0].toUkr}
                  </button>
                </div>
                <Header mainInfo={content[1]} />
                <MainArticle items={content.slice(2)} />
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    </LanguageContext.Provider>
    );
  }
}

export default App;
