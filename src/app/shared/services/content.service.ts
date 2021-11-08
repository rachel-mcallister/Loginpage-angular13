import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
   pages: any = {
    'room1': {title: 'Room1', subtitle: 'Room1 Metrics', content: 'Showing your metrics on various charts.'},
    'room2': {title: 'Room2', subtitle: 'Room2 Metrics', content: 'Showing your metrics on various charts.'},
    'room3': {title: 'Room3', subtitle: 'Room3 Metrics', content: 'Showing your metrics on various charts.'}
  };
}