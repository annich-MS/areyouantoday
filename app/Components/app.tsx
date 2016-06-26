/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetPhotosFromServer } from '../actions';
import {AnState} from '../Store/AnState';
import {ActionGrade} from 'material-ui/lib/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardMedia, RaisedButton, IconButton, Styles, AppBar} from 'material-ui';

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
    if (allPhotos == null || allPhotos[0] === undefined) {
      dispatch(GetPhotosFromServer());
    }
  }

  public shouldComponentUpdate(nextProps: IAppProps, nextState: any) {
    const {dispatch, allPhotos} = nextProps;
    return true;
  }

  public render(): React.ReactElement<{}> {
    var { dispatch, allPhotos }: any = this.props;

    return (
      <div style={contentStyle}>
      <AppBar title='One wise An said'
              iconElementRight={
                <IconButton onClick={() => window.location.href = 'https://github.com/nimatra/areyouantoday'}>
                <img src='/public/github.png' />
                </IconButton>}
                           />
        <Card style={cardStyle}>
          <CardTitle>گر ان شود ز خانه غاری سازد</CardTitle>
          <CardMedia overlay={<CardTitle title='یک ان پیر' subtitle='آن ان امروز ان است' />}>
            <img src={allPhotos[0]} />
          </CardMedia>
          <CardActions>
              <IconButton tooltip='گود ان' touch={true} tooltipPosition='top-right'>
                <ActionGrade />
              </IconButton>
          </CardActions>
        </Card>
      </div >
    );
  }
}
