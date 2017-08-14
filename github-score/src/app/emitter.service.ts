import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {
  private static _emitters: { [eventId:string]: EventEmitter<any> } = {};

  static get(eventId: string): EventEmitter<any> {
    if (!this._emitters[eventId]) {
      this._emitters[eventId] = new EventEmitter()
    }
    return this._emitters[eventId]
  }
}
