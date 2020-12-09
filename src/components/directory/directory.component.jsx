import React from 'react';
import Sections from './directory-data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            section:Sections
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.section.map(
                        ({id, ...otherSectionProps})=>{
                           return(<MenuItem 
                                key={id}
                                {...otherSectionProps}
                            />)
                        }
                    )
                }
            </div>
        )
    }
}

export default Directory;