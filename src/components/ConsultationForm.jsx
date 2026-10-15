import { useState } from 'react'
import { submitConsultation } from '../api/client'
import { formContent } from '../data/site'

const initialForm = { fullName: '', phone: '', email: '', qualification: '', destination: '', level: '', intake: '', message: '' }

export default function ConsultationForm() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  function update(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
    setErrors((current) => ({ ...current, [event.target.name]: '' }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      document.getElementById(Object.keys(nextErrors)[0])?.focus()
      return
    }
    setStatus('submitting')
    setSubmitError('')
    try {
      await submitConsultation(values)
      setStatus('success')
    } catch {
      setStatus('idle')
      setSubmitError(formContent.errors.submit)
    }
  }

  if (status === 'success') return <div className="form-success" role="status"><span aria-hidden="true">✓</span><p>{formContent.success}</p></div>

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <Field name="fullName" label={formContent.labels.fullName} value={values.fullName} error={errors.fullName} placeholder={formContent.placeholders.fullName} onChange={update} autoComplete="name" />
      <Field name="phone" label={formContent.labels.phone} value={values.phone} error={errors.phone} placeholder={formContent.placeholders.phone} onChange={update} autoComplete="tel" inputMode="tel" />
      <Field name="email" type="email" label={formContent.labels.email} value={values.email} error={errors.email} placeholder={formContent.placeholders.email} onChange={update} autoComplete="email" />
      <Field name="qualification" label={formContent.labels.qualification} value={values.qualification} error={errors.qualification} placeholder={formContent.placeholders.qualification} onChange={update} />
      <SelectField name="destination" label={formContent.labels.destination} value={values.destination} error={errors.destination} options={formContent.destinationOptions} onChange={update} />
      <SelectField name="level" label={formContent.labels.level} value={values.level} error={errors.level} options={formContent.levelOptions} onChange={update} />
      <SelectField name="intake" label={formContent.labels.intake} value={values.intake} error={errors.intake} options={formContent.intakeOptions} onChange={update} />
      <div className="form-field form-field--full">
        <label htmlFor="message">{formContent.labels.message}</label>
        <textarea id="message" name="message" rows="5" value={values.message} onChange={update} placeholder={formContent.placeholders.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
      </div>
      <div className="form-actions form-field--full">
        {submitError && <p className="submit-error" role="alert">{submitError}</p>}
        <button className="button button--primary" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? formContent.submitting : formContent.submit}</button>
        <p className="privacy-note">{formContent.privacy}</p>
      </div>
    </form>
  )
}

function Field({ name, label, error, ...props }) {
  return <div className="form-field"><label htmlFor={name}>{label}</label><input id={name} name={name} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} {...props} />{error && <span id={`${name}-error`} className="field-error">{error}</span>}</div>
}

function SelectField({ name, label, options, error, ...props }) {
  return <div className="form-field"><label htmlFor={name}>{label}</label><select id={name} name={name} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} {...props}><option value="">Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <span id={`${name}-error`} className="field-error">{error}</span>}</div>
}

function validate(values) {
  const errors = {}
  for (const field of ['fullName', 'phone', 'qualification', 'destination', 'level', 'intake', 'message']) if (!values[field].trim()) errors[field] = formContent.errors.required
  if (values.phone && !/^(?:\+?977[- ]?)?9[678]\d{8}$/.test(values.phone.replace(/[()]/g, ''))) errors.phone = formContent.errors.phone
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = formContent.errors.email
  return errors
}
