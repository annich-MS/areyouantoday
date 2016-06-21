/// <reference path="../typings/tsd.d.ts" />
export enum ACTION { Photos_ReceivedFromServer, AddPhoto }
import { AnState } from './Store/AnState';
import thunk from 'redux-thunk';

export interface IPhotoAction {
  type: ACTION;
  photo?: string;
}

export interface IGetAllPhotosAction {
  type: ACTION;
  photos?: string[];
}

export function GetPhotosFromServer(smId: string) {
  return dispatch => {
    fetch(
      'http://localhost:3000/api/getMemoes/' +
      '?owner=' + smId)
      .then(response => response.json())
      .then(json => dispatch(updatePhotos(json)));
  };
}


export function addPhoto(photo: string): IPhotoAction {
  return {
    photo: photo,
    type: ACTION.AddPhoto,
  };
}
export function updatePhotos(json: string[]): IGetAllPhotosAction {
  return {
    photos: json,
    type: ACTION.Photos_ReceivedFromServer,
  };
}


