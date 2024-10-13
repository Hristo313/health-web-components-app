import { WeightType } from '../models/PatientDashboard/weight-type';
import { HeartRateType } from '../models/PatientDashboard/heart-rate-type';
import { BPSystolicDiastolicType } from '../models/PatientDashboard/bpsystolic-diastolic-type';
import { GlucoseType } from '../models/PatientDashboard/glucose-type';
import { TotalCholesterolType } from '../models/PatientDashboard/total-cholesterol-type';
import { CholesterolHDLLDLType } from '../models/PatientDashboard/cholesterol-hdlldltype';
declare class PatientDashboardService {
    getWeightList: () => Promise<WeightType[]>;
    getHeartRateList: () => Promise<HeartRateType[]>;
    getBPSystolicDiastolicList: () => Promise<BPSystolicDiastolicType[]>;
    getGlucoseList: () => Promise<GlucoseType[]>;
    getTotalCholesterolList: () => Promise<TotalCholesterolType[]>;
    getCholesterolHDLLDLList: () => Promise<CholesterolHDLLDLType[]>;
}
export declare const patientDashboardService: PatientDashboardService;
export {};
