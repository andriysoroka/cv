import React, { Component, createContext } from 'react';
import foto from './n.jpg';
import './App.css';

const content = {
  en: {
    fullName: "Andrii Soroka",
    lenguage: {
      toUkr: "ukr",
      toEng: "en"
    },
    mains: [
      {
        title: "phone",
        value: "063768542"
      },
      {
        title: "mail", 
        value: "dree0103@gmail.com"
      },
      {
        title: "age",
        value:  23
      },
      {
        title: "nationality",
        value: "Ukrainian"
      },
      {
        title: "city", 
        value: "Lviv"
      }
    ],
    deteils: [
      {
        title: "GOAL",
        boldText: "",
        text: "I am looking for a job as Junior front-end developer  in a company of curious and active people.",
        list: []
      },
      {
        title: "SKILLS",
        boldText: "",
        text: "",
        list: ["HTML", "CSS", "JavaScript"]
      },
      {
        title: "WORK EXPERIENCE",
        boldText: "February 2018 – April 2018",
        text: "Administrator, “ESCAPE QUEST” ",
        list: []
      },
      {
        title: "EDUCATION",
        boldText: "Lviv Polytechnic National University ",
        text: "Master Degree. Field of study ‘Publishing information technologies’.",
        list: []
      },
      {
        title: "COURSES",
        boldText: "",
        text: "Successfully finished JavaScript course at ‘OKTENWEB UNIVERSITY’ and also passed such online courses as:",
        list: ["Codecademy", "W3Schools", "HTML Academy"]
      },
      {
        title: "INTERESTS",
        boldText: "",
        text: "Triathlon (swimming, biking and running), computer games, traveling, hiking in the mountains.",
        list: []
      }
    ]
  },
  ukr: {
    fullName: "Андрій Сорока",
    lenguage: {
      toUkr: "укр",
      toEng: "англ",
    },
    mains: [
      {
        title: "телефон",
        value: "063768542"
      },
      {
        title: "пошта", 
        value: "dree0103@gmail.com"
      },
      {
        title: "вік",
        value:  23
      },
      {
        title: "національність",
        value: "українець"
      },
      {
        title: "місто", 
        value: "Львів"
      }
    ],
    deteils: [
      {
        title: "ЦІЛЬ",
        boldText: "",
        text: "Я шукаю роботу як молодшого фронт-розробника в компанії цікавих та активних людей.",
        list: []
      }, 
      {
        title: "НАВИКИ",
        boldText: "",
        text: "",
        list: ["HTML", "CSS", "JavaScript"]
      }, 
      {
        title: "ДОСВІД РОБОТИ",
        boldText: "Лютий 2018 - квітень 2018 року ",
        text: "Адміністратор, 'ESCAPE QUEST' ",
        list: []
      }, 
      {
        title: "ОСВІТА",
        boldText: "Національний університет 'Львівська політехніка'",
        text: "Магістр, Сфера навчання 'Видавнича діяльність інформаційних технологій'.",
        list: []
      }, 
      {
        title: "КУРСИ",
        boldText: "",
        text: "Успішно закінчив курс JavaScript на 'OKTENWEB UNIVERSITY', а також пройшов такі онлайн курси:",
        list: ["Codecademy", "W3Schools", "HTML Academy"]
      }, 
      {
        title: "ІНТЕРЕС",
        boldText: "",
        text: "Триатлон (плавання, їзда на велосипеді та біг), комп'ютерні ігри, подорожі, походи в гори.",
        list: []
      }
    ]
  }
};

const LanguageContext = createContext();

class Header extends React.Component {
  render () {
    return (
      <header className="main-header">
        <MainInfo name={this.props.name} mainInfo={this.props.mainInfo} />
        <Foto foto={this.props.foto} />
      </header>
    )
  } 
}

class MainInfo extends React.Component {
  render () {
    return (
      <div className="main-info">
        <h2>{this.props.name}</h2>
        {this.props.mainInfo.map(item => <MainsItem key={item} item={item} info={this.props.mainInfo[item]} />)}
      </div>
    )
  }
}

class MainsItem extends React.Component {
  render () {
    return (
    <div>
      {this.props.item.title}: {this.props.item.value}
    </div>
    )
  }
}

class Foto extends React.Component {
  render () {
    return (
      <div>
        <img className="foto" src={this.props.foto} alt="my foto" /> 
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

class Item extends React.Component {
  render () {
    return (
      <div className="item">
        <div className="bold">{this.props.item.title}</div>
        <div className="item-info">
          <div className="bold">{this.props.item.boldText}</div>
          <div>{this.props.item.text}</div>
          <ul>{this.props.item.list.length > 0 ?
          this.props.item.list.map((item, index) => <Skill key={index} item={item}/>)
          : ("")}</ul>
        </div>
      </div>
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
                    {content.lenguage.toEng}
                  </button>
                  <button onClick={() => this.setState({ language: "ukr" })}>
                    {content.lenguage.toUkr}
                  </button>
                </div>
                <Header name={content.fullName} mainInfo={content.mains} foto={foto} />
                <MainArticle items={content.deteils} />
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
