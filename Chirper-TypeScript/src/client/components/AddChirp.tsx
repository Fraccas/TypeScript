import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class AddChirp extends React.Component<IAddProps, IAddState> {
    constructor(props: IAddProps) {
        super(props);
        this.state = {
            name: '',
            chirp: ''
        }
    }
  
    render() {
        return (
            <div className="input-container">
                <h2>Add Chirp</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" defaultValue=""
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value})}></input>

                    <label htmlFor="chirp">Chirp</label>
                    <input type="text" className="form-control" defaultValue=""
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({chirp: e.target.value})}></input>

                    <button className="btn btn-primary" type="submit"
                    onClick={this.SubmitChirp}>Submit Chirp</button>
                </div>
            </div>
        );
    }

    // send user data to store on the backend
    SubmitChirp = () => {
        let chirpO = {name: this.state.name, text: this.state.chirp};
        console.log(JSON.stringify(chirpO));
        return fetch('http://localhost:3000/api/chirps', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'same-origin',
            body: JSON.stringify(chirpO),
        }).then(response => {
            this.props.history.push('/');
        });
    }
}

export interface IAddProps extends RouteComponentProps{}

export interface IAddState {
    name: string,
    chirp: string
}