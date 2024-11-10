//we set up secure patient routes using JWT authentication. 
//This allows only authenticated healthcare providers to add/view patient info and tests, protecting patient data with restricted access.
const express = require('express');
const Patient = require('../models/Patient');
const ClinicalData = require('../models/ClinicalData')
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


// Add Patient Info
router.post('/', authMiddleware, async (req, res) => {
    const { name, age, gender } = req.body;
    try {
        const patient = new Patient({ name, age, gender });
        await patient.save();
        res.status(201).json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const patients = await Patient.find()
            .populate('clinicalData'); // Populate clinical data for each patient

        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/patients/critical
router.get('/critical', authMiddleware, async (req, res) => {
    try {
        const criticalPatients = await ClinicalData.find({
            $or: [
                { type: 'Blood Pressure', reading: { $lt: '50/90' } },
                { type: 'Blood Pressure', reading: { $gt: '60/150' } }
            ]
        }).populate('patientId');

        // Group data by patient for better readability
        const groupedByPatient = criticalPatients.reduce((acc, record) => {
            const patientId = record.patientId._id.toString();
            if (!acc[patientId]) {
                acc[patientId] = { patient: record.patientId, records: [] };
            }
            acc[patientId].records.push(record);
            return acc;
        }, {});

        res.json(Object.values(groupedByPatient));
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// View Patient Info
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('clinicalData'); // Populate clinical data instead of just ID references
        if (!patient) return res.status(404).json({ msg: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add Tests for a Patient
router.post('/:patientId/clinical-data', authMiddleware, async (req, res) => {
    const { patientId } = req.params;
    const { type, reading } = req.body;

    try {
        const patient = await Patient.findById(patientId);
        if (!patient) return res.status(404).json({ msg: 'Patient not found' });

        const newClinicalData = new ClinicalData({
            patientId: patientId,
            type: type,
            reading: reading
        });

        await newClinicalData.save();

        // Associate the clinical data with the patient
        patient.clinicalData.push(newClinicalData._id);
        await patient.save();

        res.status(201).json(newClinicalData);
    } catch (err) {
        console.log('server error', err);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router;
