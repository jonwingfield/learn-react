import React, { ComponentType } from 'react';

export interface Data<T> {
    data: T;
}

export type Loaded<TProps, TData> = {
    [P in keyof TProps]: TProps[P];
} & { data: TData; }

interface LoaderState<T> {
    data: T | undefined;
}

export default function withLoader<TProps, TData>(
        loader: () => Promise<TData>,
        WrappedComponent: ComponentType<Loaded<TProps, TData>>): ComponentType<TProps> 
    {

    return class Loader extends React.Component<TProps, LoaderState<TData>> {
        constructor(props: TProps) {
            super(props);
            this.state = {
                data: undefined
            };
        }
        componentDidMount() {
            loader().then(data => {
                this.setState({ data: data });
            }, err => {
                console.log("Error");
            });
        }
        render() {
            if (this.state.data) {
                return <WrappedComponent data={this.state.data} {...this.props} />
            }
            return (
                <div>Loading...</div>
            )
        }
    }
}