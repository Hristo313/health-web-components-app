import { LitElement } from 'lit';
export default class HealthIndicators extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private patientDashboardWeight;
    private patientDashboardHeartRate;
    private patientDashboardBPSystolicDiastolic;
    private patientDashboardGlucose;
    private patientDashboardTotalCholesterol;
    private patientDashboardCholesterolHDLLDL;
    render(): import("lit").TemplateResult<1>;
}
