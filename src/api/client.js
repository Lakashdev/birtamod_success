import { site } from '../data/site'

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '')

export async function submitConsultation(payload) {
  if (!API_URL) {
    const subject = encodeURIComponent(`Study enquiry from ${payload.fullName}`)
    const body = encodeURIComponent(
      [
        `Full Name: ${payload.fullName}`,
        `Phone Number: ${payload.phone}`,
        `Email Address: ${payload.email || 'Not provided'}`,
        `Latest Academic Qualification: ${payload.qualification}`,
        `Preferred Destination: ${payload.destination}`,
        `Intended Level of Study: ${payload.level}`,
        `Intended Intake: ${payload.intake}`,
        '',
        'Message or Questions:',
        payload.message,
      ].join('\n'),
    )

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    return { deliveredBy: 'email-client' }
  }

  const response = await fetch(`${API_URL}/consultations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('We could not send your enquiry. Please try again.')
  }

  return response.status === 204 ? {} : response.json()
}
