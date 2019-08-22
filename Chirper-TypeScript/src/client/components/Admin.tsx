import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Admin extends Component<IAdminProps, IAdminState> {

    constructor(props: IAdminProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div>
            <h2>Admin: {this.state.id}</h2>
            </div>
        );
    }
}

interface IAdminProps extends RouteComponentProps< {id: string} > {

}

interface IAdminState {
    id: string
}

export default Admin;