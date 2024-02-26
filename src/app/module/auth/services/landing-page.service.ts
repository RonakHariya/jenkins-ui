import { Injectable } from "@angular/core";

@Injectable()
export class LandingPageService {

    private selectedApplication: string = '';

    /**
     * @param application the application that user selected form landing page
     */
    setSelectedApplication(application: string): void {
        this.selectedApplication = application;
    }

    getSelectedApplication(): string {
        return this.selectedApplication;
    }
}