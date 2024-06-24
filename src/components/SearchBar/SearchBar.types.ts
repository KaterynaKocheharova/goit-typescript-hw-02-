export type HandleSubmitCallbackType = (query: string) => void;

export interface SeacrhBarPropTypes {
    onSubmit: HandleSubmitCallbackType;
}