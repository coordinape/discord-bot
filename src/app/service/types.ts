import { ComponentActionRow, ComponentButton, ComponentRegisterCallback } from 'slash-create';

export type CallbackComponent = {
    component: ComponentButton;
    callback: ComponentRegisterCallback;
}

export type CallbackComponentsWithActionRow = {
    componentActionRow: ComponentActionRow;
    callbackComponents: CallbackComponent[];
};
