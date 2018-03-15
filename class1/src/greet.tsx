import * as React from 'react';

interface GreetProps {
    firstName: string;
    lastName: string;
}

interface GreetState {
    age: number;
}

export default class Greet extends React.Component< GreetProps, GreetState> {
    constructor(props: GreetProps) {
        super(props);
        this.state = {
            age: 20,
        };
    }
    updateAge(): void {
        const age: number = this.state.age;
        this.setState({
            age: age+1
        });
    }
    render(): JSX.Element { // render function return render
        return(
            <div>
                <h1>Hello {this.props.firstName} {this.props.lastName} !</h1>
                <h1>I am {this.state.age} year old.</h1>
                <button
                    type="button"
                    onClick = {
                        (evt: any) => {
                            this.updateAge();
                        }
                    }
                >
                    Click Me To Increase age
                </button>
            </div>


        );
    }
}