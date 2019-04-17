import React from "react";

export class Symbol extends React.Component<{ onSymbolEntered: (symbol: string) => void }, { symbol: string }> {
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.onSymbolEntered(this.state.symbol);
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ symbol: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Symbol:</label>
                <input type="text" maxLength={4} onChange={this.handleChange.bind(this)} />
            </form>
        )
    }
}