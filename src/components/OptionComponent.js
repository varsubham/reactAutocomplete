import React from 'react';

class OptionComponent extends React.Component{
    render(){
        return(
            <div 
                onClick = {() => this.props.onhandleClick(this.props.value, this.props.country)} 
                className="optionfield" 
                style = 
                    {{display: "flex",
                    flexDirection: "row" ,
                    alignItems: "center",
                    borderRadius: "8px",
                    position: "relative", 
                    right: "64px",
                    margin: "auto",
                    padding: "16px" ,
                    width: "524px",
                    borderBottom: "1px solid #dddddd", 
                    textAlign: 'left', 
                    cursor: 'pointer'}}>
                <div>
                    <i className="fa fa-map-marker" style={{fontSize:'28px', color: "green"}}></i>
                </div>
                <div style = 
                        {{display: "flex", 
                        flexDirection: "column", 
                        marginLeft: "16px"}}>
                    <div 
                        style = 
                            {{marginBottom: "8px", 
                            fontWeight: "bold", 
                            fontSize: "18px", 
                            color: "green"}}>{this.props.value}
                    </div>
                    <div>{this.props.country}</div>
                </div>
            </div>
        )
    }
}

export default OptionComponent;