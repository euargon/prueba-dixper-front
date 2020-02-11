import { Injectable } from '@angular/core';

@Injectable()
export class AlertManagementService {

    public viewAlert(title: string, callback?: any): void {
        const event = new CustomEvent('alertaEmitida', { detail: { message: title, callback } });
        document.dispatchEvent(event);
    }
}
