import React from 'react';

class RecentSearch extends React.Component{
    render(){
        return(
            <div 
                className = "recentsearch" 
                style = {{display: "flex", 
                        cursor: "pointer",
                        fontSize: "18px",
                        padding: '8px 10px', 
                        marginRight: "8px", 
                        borderRadius: "8px", 
                        flexDirection: 'column', 
                        textAlign: "left", 
                        position: 'relative'}}>
                <div style = {{color: "green", fontWeight: "bold"}}>
                    {this.props.place}
                </div>           
                <div style = {{color : "black"}}>
                    {this.props.country}
                </div>
            </div>
        )
    }
};

export default RecentSearch;