import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            chirpsA: []
        };
    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/chirps');
            let chirps = await r.json();
            //console.log(chirps);
            
            this.setState({
                chirpsA: chirps
            });

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.state.chirpsA);
        return (this.state.chirpsA.map((value, index)=> {(
            <main className="container my-5">
                <h1 className="text-primary text-center">{value.name}: {value.text}</h1>
            </main>
        )}));
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

export default App;