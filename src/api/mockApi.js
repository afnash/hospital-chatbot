import detailsData from '../data/details.json';

export const fetchDoctorDetails = async (doctorName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Find doctor by name (case insensitive)
      const doctor = detailsData.doctors.find(
        (doc) => doc.name.toLowerCase() === doctorName.toLowerCase()
      );

      if (doctor) {
        resolve(doctor);
      } else {
        reject(new Error(`Doctor ${doctorName} not found`));
      }
    }, 800); // 800ms mock delay
  });
};
