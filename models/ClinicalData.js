const mongoose = require('mongoose');

const clinicalDataSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    type: { 
        type: String, 
        enum: ['Blood Pressure', 'Respiratory Rate', 'Blood Oxygen Level', 'Heart Beat Rate'], 
        required: true 
    },
    reading: { type: String, required: true }, // e.g., "120/80" for Blood Pressure
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ClinicalData', clinicalDataSchema);
