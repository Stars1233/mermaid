import type { DiagramDefinition } from '../../diagram-api/types.js';
// @ts-ignore: JISON doesn't support types
import parser from './parser/stateDiagram.jison';
import { StateDb } from './stateDb.js';
import styles from './styles.js';
import renderer from './stateRenderer.js';

export const diagram: DiagramDefinition = {
  parser,
  get db() {
    return new StateDb();
  },
  renderer,
  styles,
  init: (cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  },
};
