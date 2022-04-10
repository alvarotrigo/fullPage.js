import { setVariableState } from "../common/options.js";
import { FP } from '../common/constants.js';

FP.setRecordHistory = setRecordHistory;

/**
* Defines wheter to record the history for each hash change in the URL.
*/
export function setRecordHistory(value, type){
    setVariableState('recordHistory', value, type);
}
