// tslint:disable-next-line:no-submodule-imports
import * as o from 'mithril/ospec/mithril';
import index from '../src/index';

o.spec("math", function() {
    o("addition", function() {
        o(1 + 1).equals(2)
    });
});