const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    userId: String,
    student_id: String,
    first_name: String,
    last_name: String,
    email: String,
    phone_number: String,
    secondaryMobileNumber: String,
    status: {
      default: null,
      type: String
    },
    address: {
      street: String,
      city: String,
      state: String,
      postal_code: String,
      country: String,
      location: {
        longitude: {
          type: String,
        },
        latitude: {
          type: String,
        },
      },
    },
    date_of_birth: Date,
    enrolled_batch: [
      {
        batch_id: String,
        batch_name: String,
        teacher_id: String,
      },
    ],
    guardians: [
      {
        first_name: String,
        last_name: String,
        relationship: String,
        email: String,
        phone_number: String,
      },
    ],
    assignmentId: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      default: null,
    },
    updatedBy: {
      type: String,
      default: null,
    },
    additional_info: String,
  },
  { timestamps: { createdAt: true, updatedAt: true }, versionKey: false }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;