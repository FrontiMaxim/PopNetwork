import React from 'react';
import './Storage.css';
import './ModalWindow.css';
import Content from './Content';

class Storage extends React.Component {

    constructor(props) {
        super(props);
        this.createModalWindow = this.createModalWindow.bind(this);
    }

    // метод разворачивание и сворачивания модального окна
    createModalWindow() {
        // изменяем активность main-container из компонента App
        document.querySelector('.main-container').classList.toggle('passive');
        document.querySelector('.modal-window').classList.toggle('active');
    }

    render() {

        const options = ['family', 'work', 'nature'];

        return (
            <div className="storage">
                <div className="control-panel">
                    <h2>My photo torrents</h2>
                    <div className="buttons">
                        <select>
                            <option>Sort By</option>
                            {
                                
                                options.map((item, index) => <option key={index} value={item}>{item}</option>)
                            }
                        </select>
                        <div className="add-photo" onClick={this.createModalWindow}>
                            <img src="https://s2.svgbox.net/octicons.svg?ic=diff-added-bold&color=ffffff" width="16" height="16"/>   
                            <p>Add Photo</p>
                        </div>
                    </div>
                </div>
                <Content funcForModulWindow={this.createModalWindow}/>
            </div>
        );
    }
}

export default Storage;