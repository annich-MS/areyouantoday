/// <reference path='../../../typings/tsd.d.ts' />

import * as React from 'react';

interface IStringFieldProps {
  label: string;
  onChange?: ICallback;
  value: string;
}

interface ICallback { (option: string): void; }

export class StringField extends React.Component<IStringFieldProps, {}> {


  public onChange(value: any): void {
    this.props.onChange(value);
  }

  public render(): React.ReactElement<{}> {

    return (<div>
                <div>
                    <label>{this.props.label}</label>
                    <input type='text' onChange={this.onChange.bind(this) } value={this.props.value} />
                </div>
            </div>
    );
  }
}
