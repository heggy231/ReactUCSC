import * as React from 'react';

interface ModalDialogProps {
    closeDraft: any
}

export default class ModalDialog extends React.Component<ModalDialogProps, {}> {
    render(): JSX.Element {
        return (
            <div>
                <div className="modal-card"></div>
                <div 
                    className="overlay"
                    onClick = {
                        (evt) => this.props.closeDraft()
                    }
                />
            </div>
        )
    }
}