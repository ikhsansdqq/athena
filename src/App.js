import React, {Component} from 'react'
import './style/App.css';
import './style/marginal.css'
import './style/form.css'
import './style/respons.css'
import './style/bar.css'
import logo from './asset/img/logo.png';

class Card extends Component {
    render() {
        return (
                <div className={"card"}>
                    <h4 className={"nameID"}>{this.props.nameId}</h4>
                    <p className={"descID"}>{this.props.occupation}</p>
                </div>
        );
    }
}
class Article extends Component {
    render() {
        return (
            <div className={"article"}>
                <h1 className='header'>{this.props.title}</h1>
                <p>{this.props.artDesc}</p>
                <a href="#" target={"_blank"}>by {this.props.nameText}</a>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div id='container'>
                <div className='nav'>
                    <img src={logo} alt="logo" draggable={false}/>
                    <div className="menu">
                        <a href="#">Journey</a>
                        <a href="#" className={"mg-l-4 mg-r-4"}>Template</a>
                        <a href="#">Example</a>
                    </div>
                </div>
                <div id="main">
                    <div id="content">
                        <Article title={"Cryogenic, Is It Possible?"} nameText={"Jonathan Gilzean"} artDesc={"According to the scientist, cryogenic is a branch of physics dealing with the production and effects of very low temperatures. It believed by many movies that cryogenic could make someone to be immortal."}></Article>
                        <Article title={"What Are You Doing?"} nameText={"Mark Rise"} artDesc={"According to the scientist, cryogenic is a branch of physics dealing with the production and effects of very low temperatures. It believed by many movies that cryogenic could make someone to be immortal."}/>
                        <Article title={"Tale of Agamemnon"} nameText={"Ikhsan Assidiqie"} artDesc={"Upon Agamemnon's return from Troy, he was killed (according to the oldest surviving account, Odyssey 11.409–11) by Aegisthus, the lover of his wife Clytemnestra. In old versions of the story, the scene of the murder, when it is specified, is usually the house of Aegisthus, who has not taken up residence in Agamemnon's palace. the killing, or she and Aegisthus act together, killing Agamemnon in his own home.."}/>
                    </div>
                    <div id="sidebar">
                        <Card nameId={"Jonathan Gilzean"} occupation={"CFO of Inherit VC • VP Enterprise of Risen Capital."}/>
                        <Card nameId={"Mark Rise"} occupation={"CEO of Risen Capital • Co-Founder of Rise Energy."}/>
                        <Card nameId={"Ben McArthur"} occupation={"CMO of Sunken River • Investor of Adherer Media."}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;