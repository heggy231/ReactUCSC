import * as Immutable from 'immutable';
import { DESTRUCTION } from 'dns';

const DraftRecord = Immutable.Record({
  card: undefined,
  title: undefined,
  description: undefined,
  status: undefined,
  show: false
});

export class Draft extends DraftRecord {}

export function reduce(
  state: Draft = new Draft(),
  action: any
): Draft {
  return state;
}