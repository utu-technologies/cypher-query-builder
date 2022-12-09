import { Clause } from '../clause';
import { AnyConditions, stringCons } from './where-utils';

export class Where extends Clause {
  constructor(public conditions: AnyConditions, private lastClause?: Clause) {
    super();
  }

  build() {
    const keyword = this.lastClause instanceof Where ? "AND" : "WHERE";
    return `${keyword} ${stringCons(this.parameterBag, this.conditions)}`;
  }
}
