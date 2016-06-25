/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetPhotosFromServer } from '../actions';
import {AnState} from '../Store/AnState';
import {ActionGrade} from 'material-ui/lib/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardMedia, RaisedButton, IconButton, Styles} from 'material-ui';

interface IAppProps {
  dispatch?: (func: any) => void;
  allPhotos?: string[];
}

const contentStyle = {
  margin: '10px'
};
const cardStyle = {
    'marginTop': '10px',
    'marginBottom': '10px',
};
const deleteStyle = {
    'margin': '0',
    'padding': '0',
    'width': '50px',
};

function select(state: AnState): IAppProps {
  return {
    allPhotos: state.allPhotos,
  };
}

@connect(select)
export class App extends React.Component<IAppProps, {}> {
  private smDisplayName: string;
  public componentDidMount() {
    const {dispatch, allPhotos} = this.props;
  }

  public shouldComponentUpdate(nextProps: IAppProps, nextState: any) {
    const {dispatch, allPhotos} = nextProps;
    if (allPhotos == null || allPhotos[0] === undefined) {
      dispatch(GetPhotosFromServer());
    }
    return true;
  }

  public render(): React.ReactElement<{}> {
    var { dispatch, allPhotos }: any = this.props;

    return (
      <div style={contentStyle}>
        <Card style={cardStyle}>
          <CardTitle subtitle='One wise An said'/>
          <CardText>گر ان شود ز خانه غاری سازد</CardText>
          <CardMedia overlay={<CardTitle title='یک ان پیر' subtitle='آن ان امروز ان است' />}>
            <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/10501792_10153349365714299_8175611118427912525_n.jpg?oh=a18803b150e22da8f738ad3509f35302&oe=580A78F8' />
          </CardMedia>
          <CardActions>
              <IconButton tooltip='گود ان' touch={true} tooltipPosition='top-right'>
                <ActionGrade />
              </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}
