import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';

class MeetPlayers extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home_meetplayers" style={{ background:`#ffffff url(${Stripes})`}}  >
                <div className='container'>
                    <div className="home_meetplayers_wrapper">
                        <div className='home_card_wrapper'>
                            Card
                        </div>
                        <div className="home_text_wrapper">

                            <div>
                                <Tag
                                    size='100px'
                                    color='#ffffff'
                                    bck='#0c1732'
                                    add={{
                                        display:'inline-block',
                                        marginBottom:"20px"
                                    }}
                                    >
                                    Meet
                                </Tag>
                            </div>

                            <div>
                                <Tag
                                    size='100px'
                                    color='#ffffff'
                                    bck='#0c1732'
                                    add={{
                                        display:'inline-block',
                                        marginBottom:"20px"
                                    }}
                                    >
                                    The
                                </Tag>
                            </div>

                            <div>
                                <Tag
                                    size='100px'
                                    color='#ffffff'
                                    bck='#0c1732'
                                    add={{
                                        display:'inline-block',
                                        marginBottom:"20px"
                                    }}
                                    >
                                    Players
                                </Tag>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default MeetPlayers;