import React, { Component } from 'react';

class HeaderForm extends Component {
    state = { 
        button: "fa-solid fa-maximize"
    }

    //function for adjusting the size of the form and also changing the icon
    adjustFormSize = () => {
        let formWindow = document.getElementById(this.props.formID);
        let icon = this.state.button;
        let cssVariable = "--height-" + this.props.formID;
        let formHeight = getComputedStyle(document.documentElement)
            .getPropertyValue(cssVariable);

        switch (icon) {
            case "fa-solid fa-maximize":
                icon = "fa-solid fa-down-left-and-up-right-to-center";
                formWindow.style.height = "1px";
                formWindow.style.height = (5+formWindow.scrollHeight)+"px";
                break;
            default:
                icon = "fa-solid fa-maximize";
                formWindow.style.height = formHeight;
        }

        this.setState({
            button: icon
        })

    }

    render() { 
        return (
            <div className="flex header-form">
                <div>
                    <i className="fa-brands fa-free-code-camp"></i>
                    <span>{this.props.title}</span>
                </div>
                <div>
                    <i className={this.state.button} onClick={this.adjustFormSize}></i>
                </div>
            </div>
        );
    }
}
 
export default HeaderForm;