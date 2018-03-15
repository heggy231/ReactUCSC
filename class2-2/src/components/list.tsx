import * as React from 'react';

interface ListProps {
    nameList: Array<string>;
}

export default class List extends React.Component<ListProps, {}> {
    formNameList(): Array<JSX.Element> {
        return this.props.nameList.map(
            (name: string) => {
                return (
                    <li 
                        key={name}
                    >
                        {name}
                        <span 
                            className="fas fa-times"
                        />
                    </li>
                )
            }
        );
    }
    
    render(): JSX.Element {
        return (
            <div>
                <h1>Name List</h1>
                <ul>
                    {this.formNameList()}
                </ul>
            </div>
        )
    }
}