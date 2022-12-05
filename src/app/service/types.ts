import { ComponentActionRow, ComponentButton, ComponentRegisterCallback } from 'slash-create';

export type CallbackComponent = {
    component: ComponentButton;
    callback: ComponentRegisterCallback;
}

export type CallbackComponentsWithActionRows = {
    componentActionRows: ComponentActionRow[];
    callbackComponents: CallbackComponent[];
};
