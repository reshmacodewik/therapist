// validation/signupSchema.ts
import * as Yup from 'yup';
import { isValidPhoneForCountry } from '../utils/phone';

export const signupSchema = Yup.object()
  .shape({
    fullName: Yup.string().required('Full Name is required'),
    nickName: Yup.string().required('Nick Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),

    // We’ll let the library validate — no fixed length here.
    phoneNo: Yup.string()
      .required('Phone Number is required')
      .test(
        'valid-phone',
        'Invalid phone number for selected country',
        function (value) {
          const { countryIso2, countryCode } = this.parent as {
            countryIso2?: string;
            countryCode?: string; // dial code like "+91"
          };
          return isValidPhoneForCountry(value || '', countryIso2, countryCode);
        },
      ),

    gender: Yup.string().required('Gender is required'),
    day: Yup.string().required('Day is required'),
    month: Yup.string().required('Month is required'),
    year: Yup.string().required('Year is required'),

    agree: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  })
  .test('valid-dob', 'Invalid date of birth', values => {
    const { day, month, year } = values as any;
    if (!day || !month || !year) return false;
    const dob = new Date(`${year}-${month}-${day}`);
    return !isNaN(dob.getTime());
  });

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(4, 'OTP must be 4 digits')
    .required('OTP is required'),
});

export const changepasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, 'Current password must be at least 6 characters')
    .required('Current password is required'),

  newPassword: Yup.string()
    .min(6, 'New password must be at least 6 characters')
    .required('New password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const verifyCredentialsSchema = Yup.object().shape({
  licenseNumber: Yup.string().required('License Number is required'),

  year: Yup.string().required('Experience is required'),

  specialization: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one specialization')
    .required('Specialization is required'),

  language: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one language')
    .required('Language is required'),

  bio: Yup.string()
    .min(10, 'Bio must be at least 10 characters')
    .required('Bio is required'),
});

export const peerVerifySchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),

  age: Yup.string().required('Age is required'),

  mentalHealthIssue: Yup.string().required(
    'Please select the issue you have faced',
  ),

  yearsFacedProblem: Yup.string().required(
    'Please select how many years you faced the problem',
  ),

  recoveryJourney: Yup.string()
    .min(10, 'Journey must be at least 10 characters')
    .required('This field is required'),

  yearsWorkedAsPeer: Yup.string().required('Required'),

  language: Yup.string().required('Language is required'),
});

