import * as React from 'react';

interface FormProps {
    nameEntry: string;
    
    changeName: any;
    updateList: any;
}

export default class Form extends React.Component<FormProps, {}> {
    render(): JSX.Element {
        return (
            <div>
                <input
                    className = "form-control"
                    type = "text"
                    value = {this.props.nameEntry}
                    onChange = {
                        (evt) => {
                            this.props.changeName(
                                (evt.target as any).value
                            )
                        }
                    }
                />
                <input
                    className = "form-control"
                    type = "button"
                    value = "Add Name"
                    onClick = {
                        (evt) => {
                            this.props.updateList(
                                this.props.nameEntry
                            )
                        }
                    }
                />
            </div>
        );        
    }
}