import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div>Location: Pune</div>
                <div>Education BE- 3rd Yr</div>
            </div>
        )
    }
}

export default UserClass;