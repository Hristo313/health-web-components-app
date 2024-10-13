import { FetchApi } from './FetchApi-service';
class PatientDashboardService {
    constructor() {
        this.getWeightList = async () => {
            return await FetchApi.fetchApiResponse('https://excel2json.io/api/share/b8fb8833-7e2c-4a84-e611-08daf8ae6744', []);
        };
        this.getHeartRateList = async () => {
            return await FetchApi.fetchApiResponse('https://excel2json.io/api/share/43cfd6ae-a6db-42b5-e610-08daf8ae6744', []);
        };
        this.getBPSystolicDiastolicList = async () => {
            return await FetchApi.fetchApiResponse('https://excel2json.io/api/share/16761321-7913-4d05-e616-08daf8ae6744', []);
        };
        this.getGlucoseList = async () => {
            return await FetchApi.fetchApiResponse('https://excel2json.io/api/share/e1b52986-0c42-4ee1-e617-08daf8ae6744', []);
        };
        this.getTotalCholesterolList = async () => {
            return await FetchApi.fetchApiResponse('https://excel2json.io/api/share/2f36bf07-125a-4301-e612-08daf8ae6744', []);
        };
        this.getCholesterolHDLLDLList = async () => {
            return await FetchApi.fetchApiResponse('https://excel2json.io/api/share/a1863711-3edb-42ae-e613-08daf8ae6744', []);
        };
    }
}
export const patientDashboardService = new PatientDashboardService();
//# sourceMappingURL=PatientDashboard-service.js.map