import TextField from '@mui/material/TextField';

const HeroMenuForm = ({ formik }) => {
  return (
    <>
      {[
        'nick_name', 
        'real_name', 
        'origin_description', 
        'superpowers', 
        'catch_phrase'
      ].map((field) => (
        <TextField
          key={field}
          onChange={formik.handleChange}
          sx={{ mb: '8px', width: '100%' }}
          id={field}
          name={field}
          label={field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, ' ')}
          error={formik.touched[field] && Boolean(formik.errors[field])}
          helperText={formik.touched[field] && formik.errors[field]}
          value={formik.values[field]}
        />
      ))}
    </>
  );
};

export default HeroMenuForm;
