/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetPhotosFromServer } from '../actions';
import AnState from '../Store/AnState';
import {Card, CardActions, CardText, CardTitle} from 'material-ui';

interface IAppProps {
  dispatch?: (func: any) => void;
  allPhotos?: string[];
}

const contentStyle = {
  margin: '10px',
  width: '280px',
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
    allPhotos: state.allPhotosMemoes,
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
      <div style={contentStyle}><Card style={cardStyle}>
        <CardTitle subtitle='One wise An said'/>
        <CardText>گر ان شوی ز خانه غاری سازم</CardText>
        <CardActions>
          <RaisedButton label='گود ان' style={deleteStyle} primary={true} icon={<ActionDelete color={Styles.Colors.fullWhite}/>}
            onMouseUp={() => {}            }/>
        </CardActions>
      </Card>
      </div>
    );
  }
}
