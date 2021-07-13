import React from 'react';
import './Content.css';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // для хранения карточек с фотографиями (временно)
        let photoCards = [];

        // в зависимости от содержимого массива будет отображаться различный контент
        if (photoCards.length === 0) {
            return (
                <div className="content1">
                    <img src="https://s2.svgbox.net/octicons.svg?ic=image-bold&color=ffffff" width="64" height="64"/>
                    <h2>You don't have any photos yet</h2>
                    <p>Share your photo and eam real money from staking POP coin</p>
                    <div className="add-first-photo" onClick={this.props.funcForModulWindow}>
                        <img src="https://s2.svgbox.net/octicons.svg?ic=diff-added-bold&color=ffffff" width="16" height="16"/>   
                        <p>Add you first photo</p>
                    </div>
                </div>
            );
        }
    }
}

export default Content;