import React from 'react';
import Storage from './Storage';
import './App.css';
import Header from './Header';

class App  extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.foldingModalWindow = this.foldingModalWindow.bind(this);
    }

    // метод сворачивания окна
    foldingModalWindow() {
        // изменяем активность main-container из компонента App
        document.querySelector('.main-container').classList.toggle('passive');
        document.querySelector('.modal-window').classList.toggle('active');
    }

    // метод для установки и смены фокуса на элементах навигации
    setFocus(event) {
        let elementFocus = document.querySelector('.focus');
        if (elementFocus) {
            elementFocus.classList.remove('focus');
        }
        event.target.classList.toggle('focus');
    }

    render() {

        const listForNav = [ 
            'Mastemode', 
            'Home', 
            'Preferences', 
            'Developer', 
            'Help', 
            'About Pop Network - Mastemode'
        ]

        return (
            <div style={{overflow: 'hidden', height: '750px'}}>
                <div className="main-container">
                    <div className="navigation">
                        <div className="circles">
                            <img src="https://s2.svgbox.net/octicons.svg?ic=dot&color=9EA1C9" width="20" height="20"/>
                            <img src="https://s2.svgbox.net/octicons.svg?ic=dot-fill&color=9EA1C9" width="20" height="20"/>
                            <img src="https://s2.svgbox.net/octicons.svg?ic=dot&color=9EA1C9" width="20" height="20"/>
                        </div>
                        <ul>
                            <li><img src="https://s2.svgbox.net/octicons.svg?ic=image-bold&color=ffffff" width="20" height="20"/>PopNetwork</li>
                            {
                                listForNav.map((item, index) => 
                                item === 'Home' ? <li key={index} className="focus" onClick={this.setFocus}>{item}</li> : <li key={index} onClick={this.setFocus}>{item}</li>)
                            }
                        </ul>
                    </div>
                    <Header/>
                    <Storage/>
                </div>

                <div className="modal-window">
                    <div className="exit">
                        <img src="https://s2.svgbox.net/octicons.svg?ic=x-circle-bold&color=ffffff" width="20" height="20" onClick={this.foldingModalWindow}/>
                    </div>
                    <div className="panel-work">
                        <h2>Form For Adding a Photo</h2>
                        <div className="unloading-img">
                            <img src="https://s2.svgbox.net/octicons.svg?ic=plus-circle-bold&color=B269F6" width="32" height="32"/>
                            <p>Drag photo</p>
                        </div>
                        <textarea placeholder="Enter text..."></textarea>
                        <div className="input-add">Add photo</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;