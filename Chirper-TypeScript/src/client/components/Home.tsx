import * as React from 'react';

class Home extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            chirpsA: []
        };
    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/chirps');
            let chirpsData = await r.json();

            // convert json object to array for state
            let chirpArray = Object.keys(chirpsData).map(function(k) {
                 if (chirpsData[k].name != "undefined") return chirpsData[k];
            });           
            this.setState({
                chirpsA: chirpArray
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
            {this.state.chirpsA.map((chirp, index) => {
                if (chirp.name) return <h1 key={'chirp-' + index} className="text-primary text-center">{chirp.name} - {chirp.text}</h1>
            })}
            </div>
        );
    }
}

interface Chirp {
    name: string,
    text: string;
}

export interface IAppProps { }

export interface IAppState {
    chirpsA: Array<Chirp>;
}

export default Home;