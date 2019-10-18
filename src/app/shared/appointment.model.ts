export class Appointment {
    idAppointment : number;
    fk_idPatient : number;
    fk_idAppointmentType : number;
    fk_idDoctor : number;
    AppointmentDateTime : Date;
    isActive : boolean;
}
