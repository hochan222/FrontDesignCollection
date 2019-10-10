import React from 'react';
import "./style.scss";
import Button from '@material-ui/core/Button';

const Main = () => {
    return (
        <div id="main" className="Main">
            <header>
                <div className="Main-Container">
                    {/* <h5 className="Main-title">외대생 솔로탈출</h5> */}
                        <h1 className="Main-Text">
                            가느다란 물방 울 가느다란 물방 울
                        <br/>
                        가느다란 물방 울가느다란 물방 울가느다란 물방 울
                        </h1>
                        <h4 className="Main-subText">
                        가느다란 물방 울가느다란 물방 울가느다란 물방 울
                            <br/>
                            가느다란 물방 울가느다란 물방 울가느다란 물방 울가느다란 물방 울
                            <br/>
                            가느다란 물방 울가느다란 물방 울가느다란 물방 울가느다란 물방 울
                        </h4>
                </div>
            </header>
        </div>
    )
}

export default Main;